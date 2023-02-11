import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica-uno',
  templateUrl: './grafica-uno.component.html',
  styles: [],
})
export class GraficaUnoComponent {
  labelUno: string[] = ['Pan', 'Refresco', 'Torta'];

  public dataUno: ChartData<'doughnut'> = {
    labels: this.labelUno,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#6857e6', '#009fee', '#f02059'],
      },
    ],
  };
}
