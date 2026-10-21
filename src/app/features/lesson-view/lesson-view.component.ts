import { Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Lesson, Module } from '../../core/models/academy.models';
import { CurriculumService } from '../../core/services/curriculum.service';
import { ProgressService } from '../../core/services/progress.service';

interface LessonRef {
  module: Module;
  lesson: Lesson;
}

@Component({
  selector: 'app-lesson-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lesson-view.component.html',
  styleUrl: './lesson-view.component.scss'
})
export class LessonViewComponent {
  private readonly curriculum = inject(CurriculumService);
  readonly progress = inject(ProgressService);

  readonly moduleId = input.required<string>();
  readonly lessonId = input.required<string>();

  readonly module = computed(() => this.curriculum.getModuleById(this.moduleId()));
  readonly lesson = computed(() => this.curriculum.getLessonById(this.lessonId()));

  // Quiz state
  readonly answers = signal<Record<string, string>>({});
  readonly submitted = signal(false);
  readonly showSolution = signal(false);

  readonly allLessons = computed<LessonRef[]>(() =>
    this.curriculum.modules().flatMap((module) =>
      module.lessons.map((lesson) => ({ module, lesson }))
    )
  );

  readonly neighbours = computed(() => {
    const list = this.allLessons();
    const index = list.findIndex((item) => item.lesson.id === this.lessonId());
    return {
      prev: index > 0 ? list[index - 1] : null,
      next: index >= 0 && index < list.length - 1 ? list[index + 1] : null
    };
  });

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
