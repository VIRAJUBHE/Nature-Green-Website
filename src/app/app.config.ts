import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import {
  ArrowUp,
  SolarPanel,
  Bath,
  Building2,
  Car,
  Cctv,
  Check,
  ChevronRight,
  Download,
  Flame,
  GalleryVerticalEnd,
  Home,
  Hospital,
  Landmark,
  LayoutTemplate,
  Leaf,
  Mail,
  MapPin,
  Maximize2,
  Menu,
  Moon,
  Phone,
  Plane,
  School,
  ShieldCheck,
  Sofa,
  Smartphone,
  Sun,
  Video,
  Waves,
  X,
  Zap,
  ZoomIn,
  ZoomOut,
  LucideAngularModule
} from 'lucide-angular';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'top'
      })
    ),
    importProvidersFrom(
      LucideAngularModule.pick({
        ArrowUp,
        SolarPanel,
        Bath,
        Building2,
        Car,
        Cctv,
        Check,
        ChevronRight,
        Download,
        Flame,
        GalleryVerticalEnd,
        Home,
        Hospital,
        Landmark,
        LayoutTemplate,
        Leaf,
        Mail,
        MapPin,
        Maximize2,
        Menu,
        Moon,
        Phone,
        Plane,
        School,
        ShieldCheck,
        Sofa,
        Smartphone,
        Sun,
        Video,
        Waves,
        X,
        Zap,
        ZoomIn,
        ZoomOut
      })
    ), provideClientHydration(withEventReplay())
  ]
};
