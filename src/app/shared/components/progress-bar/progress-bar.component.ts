import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  readonly value = input<number>(0);
  readonly label = input<string>('');
  readonly showPercentage = input<boolean>(true);
  readonly size = input<'sm' | 'md' | 'lg'>('md');

  readonly clampedValue = computed(() => {
    const v = this.value();
    if (v < 0) return 0;
    if (v > 100) return 100;
    return Math.round(v);
  });
}