import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';



@NgModule({
  declarations: [
    BreadCrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    NopagefoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BreadCrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    NopagefoundComponent
  ]
})
export class SharedModule { }
