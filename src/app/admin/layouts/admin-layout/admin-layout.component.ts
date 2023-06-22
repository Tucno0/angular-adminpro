import { Component, OnInit, inject } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

declare function customInitFunctions(): void;
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styles: [
  ]
})
export class AdminLayoutComponent implements OnInit {

  private settingService: SettingsService = inject(SettingsService);

  ngOnInit(): void {
    customInitFunctions();
  }


}
