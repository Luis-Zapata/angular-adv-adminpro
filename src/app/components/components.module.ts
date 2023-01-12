import { NgModule } from '@angular/core';

// Modulos
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';

@NgModule({
  declarations: [IncrementadorComponent, DonaComponent],
  exports: [IncrementadorComponent, DonaComponent],
  imports: [CommonModule, FormsModule, NgChartsModule],
})
export class ComponentsModule {}
