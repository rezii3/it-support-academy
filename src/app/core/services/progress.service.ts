import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { Progress, QuizAttemptResult } from '../models/academy.models';
import { CurriculumService } from './curriculum.service';

const STORAGE_KEY = 'it_support_academy_progress_v1';

const INITIAL_PROGRESS: Progress = {
  completedLessonIds: [],
  completedModuleIds: [],
  quizResults: {},
  lastVisitedModuleId: null,
  lastVisitedLessonId: null,
  totalXp: 0,
  updatedAt: new Date().toISOString()
};

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private readonly curriculumService = inject(CurriculumService);

  // Core reactive state initialized from localStorage
  private readonly progressSignal = signal<Progress>(this.loadFromStorage());

  // Readonly signal exposed to components
  readonly progress = this.progressSignal.asReadonly();

  // Computed signals for reactive UI bindings
  readonly totalProgressSignal = computed(() => {
    const totalLessons = this.curriculumService.totalLessonsCount();
    if (totalLessons === 0) {
      return 0;
    }
    const completedCount = this.progressSignal().completedLessonIds.length;
    return Math.round((completedCount / totalLessons) * 100);
  });

  readonly completedLessonsCount = computed(
    () => this.progressSignal().completedLessonIds.length
  );

  readonly completedModulesCount = computed(
    () => this.progressSignal().completedModuleIds.length
  );

  readonly totalXp = computed(() => this.progressSignal().totalXp);

  readonly passedQuizzesCount = computed(() => {
    const results = Object.values(this.progressSignal().quizResults);
    return results.filter((r) => r.passed).length;
  });

  readonly currentRankTitle = computed(() => {
    const pct = this.totalProgressSignal();
    if (pct === 0) return 'დამწყები სტაჟიორი (IT Intern)';
    if (pct < 40) return 'დამწყები ტექნიკოსი (Trainee Technician)';
    if (pct < 80) return 'უმცროსი სპეციალისტი (Junior Help Desk)';
    if (pct < 100) return 'IT მხარდაჭერის სპეციალისტი (IT Support Specialist)';
    return 'სერტიფიცირებული სპეციალისტი (Certified Junior IT Support)';
  });

  constructor() {
    // Automatically synchronize state changes to localStorage whenever progressSignal updates
    effect(() => {
      const currentState = this.progressSignal();
      this.saveToStorage(currentState);
    });
  }

  /**
   * 1. markLessonComplete
   * Marks a lesson as completed, awards XP if not already completed,
   * recalculates completed modules, and updates localStorage.
   */
  markLessonComplete(lessonId: string, moduleId?: string): void {
    const resolvedModuleId =
      moduleId ?? this.findModuleIdByLessonId(lessonId) ?? null;

    this.progressSignal.update((current) => {
      const alreadyCompleted = current.completedLessonIds.includes(lessonId);

      const updatedLessonIds = alreadyCompleted
        ? current.completedLessonIds
        : [...current.completedLessonIds, lessonId];

      const xpGain = alreadyCompleted ? 0 : 50;
      const updatedModuleIds =
        this.recalculateCompletedModules(updatedLessonIds);

      return {
        ...current,
        completedLessonIds: updatedLessonIds,
        completedModuleIds: updatedModuleIds,
        lastVisitedModuleId: resolvedModuleId ?? current.lastVisitedModuleId,
        lastVisitedLessonId: lessonId,
        totalXp: current.totalXp + xpGain,
        updatedAt: new Date().toISOString()
      };
    });
  }

  /**
   * 2. saveQuizScore
   * Saves the quiz score and attempt metadata in localStorage.
   * If the user passes (>= passingScorePercent), it also automatically marks the lesson complete.
   */
  saveQuizScore(
    quizId: string,
    lessonId: string,
    moduleId: string,
    correctAnswersCount: number,
    totalQuestionsCount: number,
    passingScorePercent = 80
  ): QuizAttemptResult {
    const scorePercent =
      totalQuestionsCount > 0
        ? Math.round((correctAnswersCount / totalQuestionsCount) * 100)
        : 0;
    const passed = scorePercent >= passingScorePercent;

    const attemptResult: QuizAttemptResult = {
      quizId,
      lessonId,
      moduleId,
      scorePercent,
      passed,
      correctAnswersCount,
      totalQuestionsCount,
      completedAt: new Date().toISOString()
    };

    this.progressSignal.update((current) => {
      const previousAttempt = current.quizResults[quizId];
      const wasPreviouslyPassed = previousAttempt?.passed ?? false;
      const wasLessonCompleted = current.completedLessonIds.includes(lessonId);

      let updatedLessonIds = [...current.completedLessonIds];
      let xpGain = 0;

      // Award 100 XP the first time a quiz is passed
      if (passed && !wasPreviouslyPassed) {
        xpGain += 100;
      }

      // Automatically mark lesson complete if quiz is passed
      if (passed && !wasLessonCompleted) {
        updatedLessonIds.push(lessonId);
        xpGain += 50;
      }

      const updatedModuleIds =
        this.recalculateCompletedModules(updatedLessonIds);

      return {
        ...current,
        completedLessonIds: updatedLessonIds,
        completedModuleIds: updatedModuleIds,
        quizResults: {
          ...current.quizResults,
          [quizId]: attemptResult
        },
        lastVisitedModuleId: moduleId,
        lastVisitedLessonId: lessonId,
        totalXp: current.totalXp + xpGain,
        updatedAt: new Date().toISOString()
      };
    });

    return attemptResult;
  }

  /**
   * 3. getModuleProgress
   * Returns the completion percentage (0 - 100) for a given module ID.
   */
  getModuleProgress(moduleId: string): number {
    const mod = this.curriculumService.getModuleById(moduleId);
    if (!mod || mod.lessons.length === 0) {
      return 0;
    }
    const completedIds = this.progressSignal().completedLessonIds;
    const completedInModule = mod.lessons.filter((lesson) =>
      completedIds.includes(lesson.id)
    ).length;

    return Math.round((completedInModule / mod.lessons.length) * 100);
  }

  /**
   * 4. getTotalProgress
   * Returns the overall course completion percentage (0 - 100).
   */
  getTotalProgress(): number {
    return this.totalProgressSignal();
  }

  /**
   * Additional helper methods for UI state checks
   */
  getModuleCompletedLessonsCount(moduleId: string): number {
    const mod = this.curriculumService.getModuleById(moduleId);
    if (!mod) {
      return 0;
    }
    const completedIds = this.progressSignal().completedLessonIds;
    return mod.lessons.filter((lesson) => completedIds.includes(lesson.id))
      .length;
  }

  isLessonCompleted(lessonId: string): boolean {
    return this.progressSignal().completedLessonIds.includes(lessonId);
  }

  getQuizResult(quizId: string): QuizAttemptResult | undefined {
    return this.progressSignal().quizResults[quizId];
  }

  resetProgress(): void {
    this.progressSignal.set({
      ...INITIAL_PROGRESS,
      updatedAt: new Date().toISOString()
    });
  }
  exportProgress(): string {
  return JSON.stringify(this.progressSignal(), null, 2);
}

importProgress(json: string): boolean {
  try {
    const parsed = JSON.parse(json) as Partial<Progress>;
    if (!Array.isArray(parsed.completedLessonIds)) {
      return false;
    }
    this.progressSignal.set({
      ...INITIAL_PROGRESS,
      ...parsed,
      updatedAt: new Date().toISOString()
    });
    return true;
  } catch {
    return false;
  }
}

  private findModuleIdByLessonId(lessonId: string): string | undefined {
    for (const mod of this.curriculumService.modules()) {
      if (mod.lessons.some((l) => l.id === lessonId)) {
        return mod.id;
      }
    }
    return undefined;
  }

  private recalculateCompletedModules(completedLessonIds: string[]): string[] {
    return this.curriculumService
      .modules()
      .filter(
        (mod) =>
          mod.lessons.length > 0 &&
          mod.lessons.every((lesson) => completedLessonIds.includes(lesson.id))
      )
      .map((mod) => mod.id);
  }

  private saveToStorage(state: Progress): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error('Failed to write progress to localStorage:', error);
    }
  }

  private loadFromStorage(): Progress {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return INITIAL_PROGRESS;
      }
      const parsed = JSON.parse(raw) as Partial<Progress>;
      return {
        completedLessonIds: Array.isArray(parsed.completedLessonIds)
          ? parsed.completedLessonIds
          : [],
        completedModuleIds: Array.isArray(parsed.completedModuleIds)
          ? parsed.completedModuleIds
          : [],
        quizResults:
          parsed.quizResults && typeof parsed.quizResults === 'object'
            ? parsed.quizResults
            : {},
        lastVisitedModuleId: parsed.lastVisitedModuleId ?? null,
        lastVisitedLessonId: parsed.lastVisitedLessonId ?? null,
        totalXp: typeof parsed.totalXp === 'number' ? parsed.totalXp : 0,
        updatedAt: parsed.updatedAt ?? new Date().toISOString()
      };
    } catch {
      return INITIAL_PROGRESS;
    }
  }
}