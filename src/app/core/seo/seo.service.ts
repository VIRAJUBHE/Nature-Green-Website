import { DOCUMENT } from '@angular/common';
import { inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { siteContent } from '../data/site-content';
import { RouteSeoData } from './seo.types';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly renderer: Renderer2 = inject(RendererFactory2).createRenderer(null, null);
  private readonly title = inject(Title);

  updateRoute(route: RouteSeoData): void {
    const canonicalUrl = this.absoluteUrl(route.path);

    this.title.setTitle(route.title);
    this.meta.updateTag({ name: 'description', content: route.description });
    this.meta.updateTag({
      name: 'keywords',
      content:
        '2 BHK flats Bavdhan Pune, Nature Green Pune, residential project Pune, ready to move flats Pune, project amenities Bavdhan'
    });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, max-image-preview:large' });
    this.meta.updateTag({ property: 'og:title', content: route.title });
    this.meta.updateTag({ property: 'og:description', content: route.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:site_name', content: siteContent.brand.projectName });
    this.meta.updateTag({
      property: 'og:image',
      content: this.absoluteAsset(siteContent.assets.hero)
    });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: route.title });
    this.meta.updateTag({ name: 'twitter:description', content: route.description });
    this.meta.updateTag({
      name: 'twitter:image',
      content: this.absoluteAsset(siteContent.assets.hero)
    });

    this.setCanonical(canonicalUrl);
    this.setStructuredData(route, canonicalUrl);
  }

  private setCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.renderer.createElement('link');
      this.renderer.setAttribute(link, 'rel', 'canonical');
      this.renderer.appendChild(this.document.head, link);
    }

    this.renderer.setAttribute(link, 'href', url);
  }

  private setStructuredData(route: RouteSeoData, canonicalUrl: string): void {
    this.document
      .querySelectorAll('script[data-seo-json-ld="true"]')
      .forEach((script) => script.remove());

    const scripts = [
      this.realEstateListingSchema(route, canonicalUrl),
      this.localBusinessSchema(canonicalUrl),
      this.placeSchema(canonicalUrl)
    ];

    scripts.forEach((schema) => {
      const script = this.renderer.createElement('script');
      this.renderer.setAttribute(script, 'type', 'application/ld+json');
      this.renderer.setAttribute(script, 'data-seo-json-ld', 'true');
      script.text = JSON.stringify(schema);
      this.renderer.appendChild(this.document.head, script);
    });
  }

  private realEstateListingSchema(route: RouteSeoData, canonicalUrl: string): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'RealEstateListing',
      name: `${route.primaryKeyword} at ${siteContent.brand.projectName}`,
      url: canonicalUrl,
      image: [
        this.absoluteAsset(siteContent.assets.hero),
        this.absoluteAsset('/assets/images/Fascade-View.webp'),
        this.absoluteAsset('/assets/images/Floor-Plan.webp')
      ],
      description: route.description,
      address: this.postalAddress(),
      geo: this.geo(),
      price: '7800000',
      priceCurrency: 'INR',
      priceRange: `${siteContent.brand.startingPrice} onwards`,
      availability: 'https://schema.org/InStock',
      floorSize: {
        '@type': 'QuantitativeValue',
        value: 760,
        unitText: 'SQFT'
      },
      numberOfRooms: siteContent.brand.flatType,
      amenityFeature: siteContent.amenities.map((amenity) => ({
        '@type': 'LocationFeatureSpecification',
        name: amenity.title,
        value: true
      })),
      identifier: {
        '@type': 'PropertyValue',
        name: 'MahaRERA',
        value: siteContent.brand.reraNumber
      },
      seller: {
        '@type': 'RealEstateAgent',
        name: siteContent.brand.companyName,
        telephone: siteContent.brand.phone
      }
    };
  }

  private localBusinessSchema(canonicalUrl: string): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: siteContent.brand.companyName,
      url: canonicalUrl,
      image: this.absoluteAsset(siteContent.brand.logo),
      telephone: siteContent.brand.phone,
      email: siteContent.brand.email,
      priceRange: siteContent.brand.startingPrice,
      address: this.postalAddress(),
      geo: this.geo(),
      openingHours: siteContent.site.openingHours,
      areaServed: {
        '@type': 'City',
        name: siteContent.site.city
      }
    };
  }

  private placeSchema(canonicalUrl: string): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'Place',
      name: siteContent.brand.projectName,
      url: canonicalUrl,
      address: this.postalAddress(),
      geo: this.geo()
    };
  }

  private postalAddress(): object {
    return {
      '@type': 'PostalAddress',
      streetAddress: 'Aparajita Housing Society, Bavdhan Khurd',
      addressLocality: 'Bavdhan',
      addressRegion: 'Maharashtra',
      postalCode: siteContent.site.postalCode,
      addressCountry: 'IN'
    };
  }

  private geo(): object {
    return {
      '@type': 'GeoCoordinates',
      latitude: siteContent.site.coordinates.latitude,
      longitude: siteContent.site.coordinates.longitude
    };
  }

  private absoluteAsset(path: string): string {
    return new URL(path, siteContent.site.baseUrl).toString();
  }

  private absoluteUrl(path: string): string {
    const normalizedPath = path ? `/${path}` : '/';
    return new URL(normalizedPath, siteContent.site.baseUrl).toString();
  }
}
