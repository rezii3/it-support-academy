import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'მთავარი დაფა (Dashboard) | IT Support Academy'
  },
  {
    // Temporary redirect until ModuleViewComponent is built in the next steps
    path: 'modules/:moduleId',
    component: DashboardComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];