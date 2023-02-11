import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  @Input() title: string = 'Sin titulo';

  // Doughnut
  @Input() doughnutChartLabels: string[] = ['Label1', 'Label2', 'Label3'];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [30, 450, 100],
        backgroundColor: ['#6857e6', '#009fee', '#f02059'],
      },
    ],
  };
}
