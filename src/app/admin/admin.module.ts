import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialDesign } from '../material-design/material';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: '',
        redirectTo: '/admin',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [DashboardComponent, AdminComponent],
  entryComponents: [],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialDesign],
})
export class AdminModule {}
