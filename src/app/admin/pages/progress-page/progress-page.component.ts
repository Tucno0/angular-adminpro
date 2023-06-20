import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-page',
  templateUrl: './progress-page.component.html',
  styleUrls: ['./progress-page.component.css']
})
export class ProgressPageComponent {

  public progress1: number = 20;
  public progress2: number = 30;

  get getProgress1(): string {
    return `${this.progress1}%`;
  }

  get getProgress2(): string {
    return `${this.progress2}%`;
  }

  changeValue(value: number): void {
    this.progress1 = value;
  }

}
