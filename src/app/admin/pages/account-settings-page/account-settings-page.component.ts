import { Component, OnInit, inject } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings-page',
  templateUrl: './account-settings-page.component.html',
  styles: [
  ]
})
export class AccountSettingsPageComponent implements OnInit {

  private settingService: SettingsService = inject(SettingsService);

  ngOnInit(): void {
    this.settingService.checkCurrentTheme();
  }

  changeTheme( theme: string ) {
    this.settingService.changeTheme(theme);
  }


}
