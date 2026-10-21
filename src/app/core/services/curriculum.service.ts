import { Injectable, computed, signal } from '@angular/core';
import { LearningResource, Lesson, Module } from '../models/academy.models';
import { MODULES_DATA } from '../../data/modules.data';
import { MODULE_RESOURCES_MAP } from '../../data/verified-resources.data';

export interface LessonRef {
  module: Module;
  lesson: Lesson;
}

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

  readonly totalQuestionsCount = computed(() =>
    this.modulesSignal().reduce(
      (sum, mod) =>
        sum + mod.lessons.reduce((lSum, les) => lSum + les.quiz.questions.length, 0),
      0
    )
  );

  readonly totalEstimatedHours = computed(() =>
    this.modulesSignal().reduce((sum, mod) => sum + mod.estimatedHours, 0)
  );

  readonly allLessons = computed<LessonRef[]>(() =>
    this.modulesSignal().flatMap((module) =>
      module.lessons.map((lesson) => ({ module, lesson }))
    )
  );

  getModuleById(moduleId: string): Module | undefined {
    return this.modulesSignal().find((mod) => mod.id === moduleId);
  }

  getLessonById(lessonId: string, moduleId?: string): Lesson | undefined {
    if (moduleId) {
      const mod = this.getModuleById(moduleId);
      return mod?.lessons.find((lesson) => lesson.id === lessonId);
    }
    for (const mod of this.modulesSignal()) {
      const found = mod.lessons.find((lesson) => lesson.id === lessonId);
      if (found) {
        return found;
      }
    }
    return undefined;
  }

  getNeighbours(lessonId: string): { prev: LessonRef | null; next: LessonRef | null } {
    const list = this.allLessons();
    const index = list.findIndex((item) => item.lesson.id === lessonId);
    return {
      prev: index > 0 ? list[index - 1] : null,
      next: index >= 0 && index < list.length - 1 ? list[index + 1] : null
    };
  }

  getResourcesForLesson(lesson: Lesson): LearningResource[] {
    if (lesson.resources && lesson.resources.length > 0) {
      return lesson.resources;
    }
    return MODULE_RESOURCES_MAP[lesson.moduleId] ?? [];
  }

  getResourcesForModule(moduleId: string): LearningResource[] {
    const mod = this.getModuleById(moduleId);
    if (mod?.resources && mod.resources.length > 0) {
      return mod.resources;
    }
    return MODULE_RESOURCES_MAP[moduleId] ?? [];
  }
}