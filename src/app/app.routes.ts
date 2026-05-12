import { Routes } from '@angular/router';

import { seoRoutes } from './core/seo/seo-routes';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home-page').then((m) => m.HomePage),
    title: seoRoutes[0].title,
    data: { seo: seoRoutes[0] }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
