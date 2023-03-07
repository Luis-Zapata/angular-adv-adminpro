import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgreesComponent } from './progrees/progrees.component';
import { GraficaUnoComponent } from './grafica-uno/grafica-uno.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          title: 'Dashboard',
        },
      },
      {
        path: 'progress',
        component: ProgreesComponent,
        data: {
          title: 'ProgressBar',
        },
      },
      {
        path: 'grafica-uno',
        component: GraficaUnoComponent,
        data: {
          title: 'Grafica #1',
        },
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: {
          title: 'Ajustes de cuenta',
        },
      },
      {
        path: 'promesas',
        component: PromesasComponent,
        data: {
          title: 'Promesas',
        },
      },
      {
        path: 'rxjs',
        component: RxjsComponent,
        data: {
          title: 'RxJs',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
