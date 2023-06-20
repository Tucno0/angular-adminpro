import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1-page',
  templateUrl: './grafica1-page.component.html',
  styles: [],
})
export class Grafica1PageComponent {

  public labels: string[] = ['Pan', 'Refresco', 'Tacos'];

  public data: number[] = [10, 15, 40];
}
