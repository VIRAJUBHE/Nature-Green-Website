import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, inject, PLATFORM_ID, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

import { FooterComponent } from '../../layout/footer/footer';
import { NavbarComponent } from '../../layout/navbar/navbar';
import { AboutSectionComponent } from './sections/about/about-section';
import { AmenitiesSectionComponent } from './sections/amenities/amenities-section';
import { BrochureSectionComponent } from './sections/brochure/brochure-section';
import { ContactSectionComponent } from './sections/contact/contact-section';
import { FloorPlanSectionComponent } from './sections/floor-plan/floor-plan-section';
import { GallerySectionComponent } from './sections/gallery/gallery-section';
import { HeroSectionComponent } from './sections/hero/hero-section';
import { HighlightsSectionComponent } from './sections/highlights/highlights-section';
import { MapSectionComponent } from './sections/map/map-section';
import { NearbySectionComponent } from './sections/nearby/nearby-section';
import { PreviousProjectsSectionComponent } from './sections/previous-projects/previous-projects-section';
import { SeoService } from '../../core/seo/seo.service';
import { seoRoutes } from '../../core/seo/seo-routes';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    HighlightsSectionComponent,
    GallerySectionComponent,
    FloorPlanSectionComponent,
    AmenitiesSectionComponent,
    NearbySectionComponent,
    MapSectionComponent,
    PreviousProjectsSectionComponent,
    BrochureSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    LucideAngularModule
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly seo = inject(SeoService);
  readonly showBackToTop = signal(false);

  constructor() {
    this.seo.updateRoute(seoRoutes[0]);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.showBackToTop.set(window.scrollY > 650);
  }

  backToTop(): void {
    this.document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }
}
