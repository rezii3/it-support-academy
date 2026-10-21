import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
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

  readonly searchQuery = signal<string>('');
  readonly statusFilter = signal<'all' | 'in-progress' | 'completed'>('all');
  readonly statusBanner = signal<{ type: 'ok' | 'err'; text: string } | null>(null);

  readonly filteredModules = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const filter = this.statusFilter();

    return this.curriculumService.modules().filter((mod) => {
      const pct = this.progressService.getModuleProgress(mod.id);
      if (filter === 'completed' && pct < 100) return false;
      if (filter === 'in-progress' && pct === 100) return false;

      if (!query) return true;
      const inModule =
        mod.title.toLowerCase().includes(query) ||
        mod.subtitle.toLowerCase().includes(query) ||
        mod.description.toLowerCase().includes(query);
      const inLessons = mod.lessons.some(
        (les) =>
          les.title.toLowerCase().includes(query) ||
          les.summary.toLowerCase().includes(query)
      );
      return inModule || inLessons;
    });
  });

  readonly nextRecommendedLesson = computed(() => {
    const completedIds = this.progressService.progress().completedLessonIds;
    for (const mod of this.curriculumService.modules()) {
      for (const lesson of mod.lessons) {
        if (!completedIds.includes(lesson.id)) {
          return { module: mod, lesson };
        }
      }
    }
    return null;
  });

  get totalProgress(): number {
    return this.progressService.getTotalProgress();
  }

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

  onSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchQuery.set(value);
  }

  onResetProgress(): void {
    this.progressService.resetProgress();
    this.statusBanner.set({
      type: 'ok',
      text: 'სასწავლო პროგრესი წარმატებით განულდა (Progress has been reset).'
    });
  }

  onExportProgress(): void {
    const blob = new Blob([this.progressService.exportProgress()], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'it-support-academy-progress.json';
    a.click();
    URL.revokeObjectURL(url);
    this.statusBanner.set({
      type: 'ok',
      text: 'პროგრესის ფაილი ჩამოიტვირთა (it-support-academy-progress.json).'
    });
  }

  async onImportProgress(event: Event): Promise<void> {
    const inputEl = event.target as HTMLInputElement;
    const file = inputEl.files?.[0];
    if (!file) {
      return;
    }
    const ok = this.progressService.importProgress(await file.text());
    inputEl.value = '';
    this.statusBanner.set(
      ok
        ? { type: 'ok', text: 'პროგრესი წარმატებით აღდგა ფაილიდან!' }
        : { type: 'err', text: 'ფაილის ფორმატი არასწორია. აირჩიეთ ვალიდური JSON ფაილი.' }
    );
  }
}