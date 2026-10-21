import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurriculumService } from '../../core/services/curriculum.service';
import { ProgressService } from '../../core/services/progress.service';

@Component({
  selector: 'app-lesson-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lesson-view.component.html',
  styleUrl: './lesson-view.component.scss'
})
export class LessonViewComponent {
  readonly curriculum = inject(CurriculumService);
  readonly progress = inject(ProgressService);

  readonly moduleId = input.required<string>();
  readonly lessonId = input.required<string>();

  readonly module = computed(() => this.curriculum.getModuleById(this.moduleId()));
  readonly lesson = computed(() =>
    this.curriculum.getLessonById(this.lessonId(), this.moduleId())
  );
  readonly resources = computed(() => {
    const les = this.lesson();
    return les ? this.curriculum.getResourcesForLesson(les) : [];
  });
  readonly neighbours = computed(() => this.curriculum.getNeighbours(this.lessonId()));

  // Reactive state reset automatically on lesson change
  readonly answers = signal<Record<string, string>>({});
  readonly submitted = signal(false);
  readonly showSolution = signal(false);
  readonly copiedHeading = signal<string | null>(null);

  readonly answeredCount = computed(() => Object.keys(this.answers()).length);

  readonly correctCount = computed(() => {
    const lesson = this.lesson();
    if (!lesson) {
      return 0;
    }
    const given = this.answers();
    return lesson.quiz.questions.filter((q) => given[q.id] === q.correctOptionId).length;
  });

  readonly scorePercent = computed(() => {
    const total = this.lesson()?.quiz.questions.length ?? 0;
    return total > 0 ? Math.round((this.correctCount() / total) * 100) : 0;
  });

  readonly passed = computed(
    () => this.scorePercent() >= (this.lesson()?.quiz.passingScorePercent ?? 80)
  );

  constructor() {
    effect(() => {
      const modId = this.moduleId();
      const lesId = this.lessonId();
      this.answers.set({});
      this.submitted.set(false);
      this.showSolution.set(false);
      this.copiedHeading.set(null);
      if (modId && lesId) {
        this.progress.recordLessonVisit(lesId, modId);
      }
    });
  }

  async copyCode(heading: string, code: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(code);
      this.copiedHeading.set(heading);
      setTimeout(() => {
        if (this.copiedHeading() === heading) {
          this.copiedHeading.set(null);
        }
      }, 2000);
    } catch {
      this.copiedHeading.set(null);
    }
  }

  selectAnswer(questionId: string, optionId: string): void {
    if (this.submitted()) {
      return;
    }
    this.answers.update((current) => ({ ...current, [questionId]: optionId }));
  }

  submitQuiz(): void {
    const lesson = this.lesson();
    if (!lesson) {
      return;
    }
    this.progress.saveQuizScore(
      lesson.quiz.id,
      lesson.id,
      lesson.moduleId,
      this.correctCount(),
      lesson.quiz.questions.length,
      lesson.quiz.passingScorePercent
    );
    this.submitted.set(true);
  }

  retryQuiz(): void {
    this.answers.set({});
    this.submitted.set(false);
  }

  completeLesson(): void {
    const lesson = this.lesson();
    if (lesson) {
      this.progress.markLessonComplete(lesson.id, lesson.moduleId);
    }
  }

  youtubeSearchUrl(tip: string): string | null {
    const match = tip.match(/Query\)\s*:\s*(.+)$/i);
    if (!match) {
      return null;
    }
    return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(match[1].trim());
  }

  optionClass(questionId: string, optionId: string, correctId: string): string {
    const selected = this.answers()[questionId] === optionId;
    if (!this.submitted()) {
      return selected ? 'option selected' : 'option';
    }
    if (optionId === correctId) {
      return 'option correct';
    }
    return selected ? 'option wrong' : 'option';
  }
}