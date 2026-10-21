import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QuizAttemptResult } from '../../core/models/academy.models';
import { CurriculumService } from '../../core/services/curriculum.service';
import { ProgressService } from '../../core/services/progress.service';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-quiz-view',
  standalone: true,
  imports: [RouterLink, ProgressBarComponent],
  templateUrl: './quiz-view.component.html',
  styleUrl: './quiz-view.component.scss'
})
export class QuizViewComponent {
  readonly curriculum = inject(CurriculumService);
  readonly progress = inject(ProgressService);

  readonly moduleId = input.required<string>();
  readonly lessonId = input.required<string>();

  readonly module = computed(() => this.curriculum.getModuleById(this.moduleId()));
  readonly lesson = computed(() =>
    this.curriculum.getLessonById(this.lessonId(), this.moduleId())
  );
  readonly neighbours = computed(() => this.curriculum.getNeighbours(this.lessonId()));

  readonly viewMode = signal<'all' | 'step'>('all');
  readonly currentIndex = signal<number>(0);
  readonly answers = signal<Record<string, string>>({});
  readonly submitted = signal<boolean>(false);
  readonly lastAttempt = signal<QuizAttemptResult | null>(null);

  readonly questions = computed(() => this.lesson()?.quiz.questions ?? []);
  readonly currentQuestion = computed(() => this.questions()[this.currentIndex()] ?? null);

  readonly answeredCount = computed(() => Object.keys(this.answers()).length);

  readonly answeredPercent = computed(() => {
    const total = this.questions().length;
    return total > 0 ? Math.round((this.answeredCount() / total) * 100) : 0;
  });

  readonly correctCount = computed(() => {
    const qs = this.questions();
    const given = this.answers();
    return qs.filter((q) => given[q.id] === q.correctOptionId).length;
  });

  readonly scorePercent = computed(() => {
    const total = this.questions().length;
    return total > 0 ? Math.round((this.correctCount() / total) * 100) : 0;
  });

  readonly passed = computed(
    () => this.scorePercent() >= (this.lesson()?.quiz.passingScorePercent ?? 80)
  );

  readonly previousBest = computed(() => {
    const quizId = this.lesson()?.quiz.id;
    return quizId ? this.progress.getQuizResult(quizId) : undefined;
  });

  constructor() {
    // Reset quiz state whenever route parameters change
    effect(() => {
      const modId = this.moduleId();
      const lesId = this.lessonId();
      this.answers.set({});
      this.submitted.set(false);
      this.currentIndex.set(0);
      this.lastAttempt.set(null);
      if (modId && lesId) {
        this.progress.recordLessonVisit(lesId, modId);
      }
    });
  }

  setViewMode(mode: 'all' | 'step'): void {
    this.viewMode.set(mode);
  }

  goToQuestion(index: number): void {
    const total = this.questions().length;
    if (index >= 0 && index < total) {
      this.currentIndex.set(index);
    }
  }

  prevQuestion(): void {
    this.goToQuestion(this.currentIndex() - 1);
  }

  nextQuestion(): void {
    this.goToQuestion(this.currentIndex() + 1);
  }

  selectAnswer(questionId: string, optionId: string): void {
    if (this.submitted()) {
      return;
    }
    this.answers.update((current) => ({ ...current, [questionId]: optionId }));
  }

  isQuestionAnswered(questionId: string): boolean {
    return Boolean(this.answers()[questionId]);
  }

  isQuestionCorrect(questionId: string, correctOptionId: string): boolean {
    return this.answers()[questionId] === correctOptionId;
  }

  submitQuiz(): void {
    const lesson = this.lesson();
    if (
      !lesson ||
      lesson.quiz.questions.length === 0 ||
      this.answeredCount() < lesson.quiz.questions.length
    ) {
      return;
    }

    const attempt = this.progress.saveQuizScore(
      lesson.quiz.id,
      lesson.id,
      lesson.moduleId,
      this.correctCount(),
      lesson.quiz.questions.length,
      lesson.quiz.passingScorePercent
    );
    this.lastAttempt.set(attempt);
    this.submitted.set(true);
    this.viewMode.set('all');
  }

  retryQuiz(): void {
    this.answers.set({});
    this.submitted.set(false);
    this.currentIndex.set(0);
    this.lastAttempt.set(null);
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