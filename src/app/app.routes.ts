import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home-page').then((m) => m.HomePage),
    title: 'Nature Green | Possession Ready 2BHK Flats in Bavdhan, Pune'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
