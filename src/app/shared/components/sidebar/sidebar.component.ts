import { Component, inject } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  private sidebarService = inject(SidebarService);

  menuItems: any[] = [];

  constructor() {
    this.menuItems = this.sidebarService.menu;
    console.log(this.menuItems);
  }

}
