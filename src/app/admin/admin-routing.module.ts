import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountSettingsPageComponent } from './pages/account-settings-page/account-settings-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { Grafica1PageComponent } from './pages/grafica1-page/grafica1-page.component';
import { ProgressPageComponent } from './pages/progress-page/progress-page.component';
import { PromesasComponent } from './pages/promesas/promesas.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';


const routes: Routes = [
  {
    path: '',
    component : AdminLayoutComponent,
    children: [
      { path: '', component: DashboardPageComponent, data: { titulo: 'Dashboard' } },
      { path: 'progress', component: ProgressPageComponent, data: { titulo: 'Progress' } },
      { path: 'grafica1', component: Grafica1PageComponent, data: { titulo: 'Gráfica 1' } },
      { path: 'account-settings', component: AccountSettingsPageComponent, data: { titulo: 'Ajustes del Tema' } },
      { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }},
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' }},
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
