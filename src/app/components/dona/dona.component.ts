import { AfterContentInit, Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'component-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent implements AfterContentInit {
  @Input() public title: string = 'Sin título';

  // Doughnut
  @Input() public doughnutChartLabels: string[] = [
    'Label 1',
    'Label 2',
    'Label 3',
  ];

  @Input() public data: number[] = [350, 450, 100];

  ngAfterContentInit () {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [{
        data: this.data,
        backgroundColor: ['#6857E6', '#009FEE', '#F02059'],
      },]
    };
  }

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{
      data: this.data,
      backgroundColor: ['#6857E6', '#009FEE', '#F02059'],
    },]
  };

  public doughnutChartType: ChartType = 'doughnut';
}
