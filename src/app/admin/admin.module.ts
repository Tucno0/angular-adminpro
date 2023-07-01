import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';

import { Grafica1PageComponent } from './pages/grafica1-page/grafica1-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ProgressPageComponent } from './pages/progress-page/progress-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AccountSettingsPageComponent } from './pages/account-settings-page/account-settings-page.component';
import { PromesasComponent } from './pages/promesas/promesas.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardPageComponent,
    Grafica1PageComponent,
    ProgressPageComponent,
    AccountSettingsPageComponent,
    PromesasComponent,
    RxjsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SharedModule,
    ComponentsModule
  ]
})
export class AdminModule { }
