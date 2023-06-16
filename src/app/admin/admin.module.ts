import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

import { Grafica1PageComponent } from './pages/grafica1-page/grafica1-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ProgressPageComponent } from './pages/progress-page/progress-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardPageComponent,
    Grafica1PageComponent,
    ProgressPageComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
