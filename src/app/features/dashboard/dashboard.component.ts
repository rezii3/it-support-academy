import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Lesson } from '../../core/models/academy.models';
import { CurriculumService } from '../../core/services/curriculum.service';
import { ProgressService } from '../../core/services/progress.service';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, ProgressBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  readonly curriculumService = inject(CurriculumService);
  readonly progressService = inject(ProgressService);

  readonly modules = this.curriculumService.modules;

  // Computed signal for the next uncompleted lesson
  readonly nextRecommendedLesson = computed(() => {
    const completedIds = this.progressService.progress().completedLessonIds;
    for (const mod of this.modules()) {
      for (const lesson of mod.lessons) {
        if (!completedIds.includes(lesson.id)) {
          return {
            module: mod,
            lesson
          };
        }
      }
    }
    return null;
  });

  // Uses ProgressService.getTotalProgress()
  get totalProgress(): number {
    return this.progressService.getTotalProgress();
  }

  // Uses ProgressService.getModuleProgress(moduleId)
  getModuleProgress(moduleId: string): number {
    return this.progressService.getModuleProgress(moduleId);
  }

  getModuleCompletedCount(moduleId: string): number {
    return this.progressService.getModuleCompletedLessonsCount(moduleId);
  }

  isLessonDone(lessonId: string): boolean {
    return this.progressService.isLessonCompleted(lessonId);
  }

  getQuizScore(quizId: string): number | null {
    const result = this.progressService.getQuizResult(quizId);
    return result ? result.scorePercent : null;
  }

  // Uses ProgressService.markLessonComplete(...)
  onMarkLessonComplete(lessonId: string, moduleId: string): void {
    this.progressService.markLessonComplete(lessonId, moduleId);
  }

  // Uses ProgressService.saveQuizScore(...)
  onSimulateQuizPass(lesson: Lesson): void {
    this.progressService.saveQuizScore(
      lesson.quiz.id,
      lesson.id,
      lesson.moduleId,
      5,
      5,
      lesson.quiz.passingScorePercent
    );
  }

  onResetProgress(): void {
    this.progressService.resetProgress();
  }
  onExportProgress(): void {
  const blob = new Blob([this.progressService.exportProgress()], {
    type: 'application/json'
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'it-support-progress.json';
  a.click();
  URL.revokeObjectURL(url);
}

async onImportProgress(event: Event): Promise<void> {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (!file) {
    return;
  }
  const ok = this.progressService.importProgress(await file.text());
  alert(ok ? 'პროგრესი აღდგა' : 'ფაილი არასწორია');
}
}