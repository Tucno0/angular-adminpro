import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.css'] // This is the only difference between this file and the snippet above
})
export class NopagefoundComponent {

    year: number = new Date().getFullYear();
}
