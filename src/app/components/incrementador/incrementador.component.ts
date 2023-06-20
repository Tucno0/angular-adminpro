import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'component-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css'],
})
export class IncrementadorComponent implements OnInit {

  // @Input('valor') public progress: number = 50;
  @Input() public progress: number = 50;
  @Input() public btnClass: string = 'btn-primary';

  @Output() public valorSalida: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  changeValue(value: number): void {
    if (this.progress + value <= 100 && this.progress + value >= 0) {
      this.progress += value;
    }

    this.valorSalida.emit(this.progress);
  }

  onChange(newValue: number): void {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0
    } else {
      this.progress = newValue;
    }

    this.valorSalida.emit(this.progress);
  }

}
