import { Routes } from '@angular/router';

import { seoRoutes } from './core/seo/seo-routes';

const homeRoutes = seoRoutes.map((seo) => ({
  path: seo.path,
  loadComponent: () => import('./pages/home/home-page').then((m) => m.HomePage),
  title: seo.title,
  data: { seo }
}));

export const routes: Routes = [
  ...homeRoutes,
  {
    path: '**',
    redirectTo: ''
  }
];
