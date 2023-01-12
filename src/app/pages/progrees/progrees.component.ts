import { Component } from '@angular/core';

@Component({
  selector: 'app-progrees',
  templateUrl: './progrees.component.html',
  styleUrls: ['./progrees.component.css'],
})
export class ProgreesComponent {
  progresoUno: number = 25;
  progresoDos: number = 35;

  get getProgresoUno() {
    return `${this.progresoUno}% `;
  }

  get getProgresoDos() {
    return `${this.progresoDos}%`;
  }
}
