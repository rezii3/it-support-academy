import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CurriculumService } from './core/services/curriculum.service';
import { ProgressService } from './core/services/progress.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ProgressBarComponent } from './shared/components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavbarComponent,
    ProgressBarComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  readonly curriculumService = inject(CurriculumService);
  readonly progressService = inject(ProgressService);

  readonly isSidebarOpen = signal<boolean>(false);

  toggleSidebar(): void {
    this.isSidebarOpen.update((open) => !open);
  }

  closeSidebarOnMobile(): void {
    this.isSidebarOpen.set(false);
  }

  getModuleProgress(moduleId: string): number {
    return this.progressService.getModuleProgress(moduleId);
  }
}