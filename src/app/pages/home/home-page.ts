import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, HostListener, inject, PLATFORM_ID, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
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
import { routeSeoByPath, seoRoutes } from '../../core/seo/seo-routes';
import { RouteSeoData } from '../../core/seo/seo.types';

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
export class HomePage implements AfterViewInit {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  readonly showBackToTop = signal(false);

  constructor() {
    this.updateSeo();
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateSeo();
        this.scrollToRouteSection();
      });
  }

  ngAfterViewInit(): void {
    this.scrollToRouteSection();
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

  private updateSeo(): void {
    this.seo.updateRoute(this.currentSeo());
  }

  private scrollToRouteSection(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.setTimeout(() => {
      this.document
        .getElementById(this.currentSeo().sectionId)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  private currentSeo(): RouteSeoData {
    const seo = this.route.snapshot.data['seo'] as RouteSeoData | undefined;
    const path = this.router.url.split('?')[0].replace(/^\/+/, '');

    return seo ?? routeSeoByPath.get(path) ?? seoRoutes[0];
  }
}
