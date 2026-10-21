import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ModuleViewComponent } from './features/module-view/module-view.component';
import { LessonViewComponent } from './features/lesson-view/lesson-view.component';
import { QuizViewComponent } from './features/quiz-view/quiz-view.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'მთავარი დაფა | IT Support Academy'
  },
  {
    path: 'modules/:moduleId',
    component: ModuleViewComponent,
    title: 'სასწავლო მოდული | IT Support Academy'
  },
  {
    path: 'modules/:moduleId/lessons/:lessonId/quiz',
    component: QuizViewComponent,
    title: 'ტესტი | IT Support Academy'
  },
  {
    path: 'modules/:moduleId/lessons/:lessonId',
    component: LessonViewComponent,
    title: 'გაკვეთილი | IT Support Academy'
  },
  { path: '**', redirectTo: 'dashboard' }
];
