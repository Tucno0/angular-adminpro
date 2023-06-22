import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [ './login-page.component.css' ]
})
export class LoginPageComponent {

  private router = inject(Router)

  login() {
    this.router.navigate(['dashboard'])
  }

}
