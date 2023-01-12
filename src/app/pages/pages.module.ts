import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgreesComponent } from './progrees/progrees.component';
import { GraficaUnoComponent } from './grafica-uno/grafica-uno.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgreesComponent,
    GraficaUnoComponent,
    PagesComponent,
  ],
  exports: [
    DashboardComponent,
    ProgreesComponent,
    GraficaUnoComponent,
    PagesComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
  ],
})
export class PagesModule {}
