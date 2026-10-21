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
  private readonly progressSignal = signal<Progress>(this.loadFromStorage());

  readonly progress = this.progressSignal.asReadonly();

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

  readonly averageQuizScore = computed(() => {
    const results = Object.values(this.progressSignal().quizResults);
    if (results.length === 0) {
      return 0;
    }
    const sum = results.reduce((acc, r) => acc + r.scorePercent, 0);
    return Math.round(sum / results.length);
  });

  readonly currentRankTitle = computed(() => {
    const pct = this.totalProgressSignal();
    if (pct === 0) return 'დამწყები სტაჟიორი (IT Intern)';
    if (pct < 25) return 'დამწყები ტექნიკოსი (Trainee Technician)';
    if (pct < 55) return 'უმცროსი სპეციალისტი (Junior Help Desk L1)';
    if (pct < 85) return 'IT მხარდაჭერის სპეციალისტი (IT Support Specialist L2)';
    if (pct < 100) return 'უფროსი ტექნიკური სპეციალისტი (Senior Support Engineer)';
    return 'სერტიფიცირებული სპეციალისტი (Certified IT Support Pro)';
  });

  constructor() {
    effect(() => {
      const currentState = this.progressSignal();
      this.saveToStorage(currentState);
    });
  }

  recordLessonVisit(lessonId: string, moduleId: string): void {
    this.progressSignal.update((current) => {
      if (
        current.lastVisitedLessonId === lessonId &&
        current.lastVisitedModuleId === moduleId
      ) {
        return current;
      }
      return {
        ...current,
        lastVisitedModuleId: moduleId,
        lastVisitedLessonId: lessonId,
        updatedAt: new Date().toISOString()
      };
    });
  }

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

      const updatedLessonIds = [...current.completedLessonIds];
      let xpGain = 0;

      if (passed && !wasPreviouslyPassed) {
        xpGain += 100;
      }

      if (passed && !wasLessonCompleted) {
        updatedLessonIds.push(lessonId);
        xpGain += 50;
      }

      const bestResult: QuizAttemptResult =
        previousAttempt && previousAttempt.scorePercent > attemptResult.scorePercent
          ? {
              ...attemptResult,
              scorePercent: previousAttempt.scorePercent,
              correctAnswersCount: previousAttempt.correctAnswersCount,
              passed: previousAttempt.passed || attemptResult.passed
            }
          : {
              ...attemptResult,
              passed: wasPreviouslyPassed || attemptResult.passed
            };

      const updatedModuleIds =
        this.recalculateCompletedModules(updatedLessonIds);

      return {
        ...current,
        completedLessonIds: updatedLessonIds,
        completedModuleIds: updatedModuleIds,
        quizResults: {
          ...current.quizResults,
          [quizId]: bestResult
        },
        lastVisitedModuleId: moduleId,
        lastVisitedLessonId: lessonId,
        totalXp: current.totalXp + xpGain,
        updatedAt: new Date().toISOString()
      };
    });

    return attemptResult;
  }

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

  getTotalProgress(): number {
    return this.totalProgressSignal();
  }

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
      const validLessonIds = new Set(
        this.curriculumService.allLessons().map((item) => item.lesson.id)
      );
      const sanitizedLessonIds = parsed.completedLessonIds.filter(
        (id): id is string => typeof id === 'string' && validLessonIds.has(id)
      );
      const recalculatedModules =
        this.recalculateCompletedModules(sanitizedLessonIds);

      this.progressSignal.set({
        ...INITIAL_PROGRESS,
        ...parsed,
        completedLessonIds: sanitizedLessonIds,
        completedModuleIds: recalculatedModules,
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