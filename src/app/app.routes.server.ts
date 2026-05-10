import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Server
  },
  {
    path: 'about',
    renderMode: RenderMode.Server
  },
  {
    path: 'highlights',
    renderMode: RenderMode.Server
  },
  {
    path: 'gallery',
    renderMode: RenderMode.Server
  },
  {
    path: 'floor-plans',
    renderMode: RenderMode.Server
  },
  {
    path: 'amenities',
    renderMode: RenderMode.Server
  },
  {
    path: 'location',
    renderMode: RenderMode.Server
  },
  {
    path: 'contact',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
