import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Main',
          url: '/',
        },
        {
          title: 'ProgressBar',
          url: 'progress',
        },
        {
          title: 'Gráfica',
          url: 'grafica-uno',
        },
        {
          title: 'Promesa',
          url: 'promesas',
        },
        {
          title: 'rxjs',
          url: 'rxjs',
        },
      ],
    },
  ];

  constructor() {}
}
