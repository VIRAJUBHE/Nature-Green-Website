import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LucideAngularModule } from 'lucide-angular';

import { siteContent } from '../../../../core/data/site-content';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-map-section',
  standalone: true,
  imports: [LucideAngularModule, RevealDirective],
  templateUrl: './map-section.html',
  styleUrl: './map-section.css'
})
export class MapSectionComponent {
  private readonly sanitizer = inject(DomSanitizer);
  readonly content = siteContent;
  readonly mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    siteContent.map.embedUrl
  );
}
