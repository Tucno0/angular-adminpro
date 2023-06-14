import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ProgressPageComponent } from './pages/progress-page/progress-page.component';
import { Grafica1PageComponent } from './pages/grafica1-page/grafica1-page.component';


const routes: Routes = [
  {
    path: '',
    component : AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'progress', component: ProgressPageComponent },
      { path: 'grafica1', component: Grafica1PageComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
