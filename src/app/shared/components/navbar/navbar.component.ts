import { Component, inject, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressService } from '../../../core/services/progress.service';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, ProgressBarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  readonly progressService = inject(ProgressService);
  readonly toggleSidebar = output<void>();

  onMenuClick(): void {
    this.toggleSidebar.emit();
  }
}