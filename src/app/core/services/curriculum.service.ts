import { Injectable, computed, signal } from '@angular/core';
import { Lesson, Module } from '../models/academy.models';
import { MODULES_DATA } from '../../data/modules.data';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  private readonly modulesSignal = signal<Module[]>(MODULES_DATA);

  readonly modules = this.modulesSignal.asReadonly();

  readonly totalModulesCount = computed(() => this.modulesSignal().length);

  readonly totalLessonsCount = computed(() =>
    this.modulesSignal().reduce((sum, mod) => sum + mod.lessons.length, 0)
  );

  readonly totalEstimatedHours = computed(() =>
    this.modulesSignal().reduce((sum, mod) => sum + mod.estimatedHours, 0)
  );

  getModuleById(moduleId: string): Module | undefined {
    return this.modulesSignal().find((mod) => mod.id === moduleId);
  }

  getLessonById(lessonId: string): Lesson | undefined {
    for (const mod of this.modulesSignal()) {
      const found = mod.lessons.find((lesson) => lesson.id === lessonId);
      if (found) {
        return found;
      }
    }
    return undefined;
  }
}