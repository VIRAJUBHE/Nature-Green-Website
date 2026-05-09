import { DOCUMENT } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
  readonly showBackToTop = signal(false);

  constructor(title: Title, meta: Meta) {
    title.setTitle('Nature Green | Possession Ready 2BHK Flats in Bavdhan, Pune');
    meta.updateTag({ name: 'description', content: 'Nature Green by Avani Construction offers possession ready premium 2BHK flats in Bavdhan, Pune with 760 sq.ft carpet area, modern amenities, floor plans, brochure, gallery, and enquiry details.' });
    meta.updateTag({ name: 'keywords', content: 'Nature Green Bavdhan, possession ready 2BHK Bavdhan, 2BHK flats in Bavdhan Pune, Avani Construction, ready possession flats Pune' });
    meta.updateTag({ property: 'og:title', content: 'Nature Green | Possession Ready 2BHK Flats in Bavdhan' });
    meta.updateTag({ property: 'og:description', content: 'View Nature Green by Avani Construction, a possession ready 2BHK residential project in Bavdhan, Pune with amenities, floor plans, gallery, brochure, and enquiry details.' });
    meta.updateTag({ property: 'og:type', content: 'website' });
    meta.updateTag({ property: 'og:site_name', content: 'Nature Green' });
    meta.updateTag({ name: 'twitter:title', content: 'Nature Green | Possession Ready 2BHK Flats in Bavdhan' });
    meta.updateTag({ name: 'twitter:description', content: 'Possession ready premium 2BHK flats at Bavdhan, Pune by Avani Construction. View plans, amenities, brochure, gallery, and enquiry details.' });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.showBackToTop.set(window.scrollY > 650);
  }

  backToTop(): void {
    this.document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }
}
