import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurriculumService } from '../../core/services/curriculum.service';
import { ProgressService } from '../../core/services/progress.service';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-module-view',
  standalone: true,
  imports: [RouterLink, ProgressBarComponent],
  templateUrl: './module-view.component.html',
  styleUrl: './module-view.component.scss'
})
export class ModuleViewComponent {
  readonly curriculum = inject(CurriculumService);
  readonly progress = inject(ProgressService);

  readonly moduleId = input.required<string>();

  readonly module = computed(() => this.curriculum.getModuleById(this.moduleId()));
  readonly resources = computed(() => this.curriculum.getResourcesForModule(this.moduleId()));

  moduleProgress(): number {
    return this.progress.getModuleProgress(this.moduleId());
  }

  getQuizScore(quizId: string): number | null {
    return this.progress.getQuizResult(quizId)?.scorePercent ?? null;
  }
}