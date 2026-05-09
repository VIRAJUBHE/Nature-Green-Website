import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

import { siteContent } from '../../../../core/data/site-content';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-amenities-section',
  standalone: true,
  imports: [LucideAngularModule, SectionHeadingComponent, RevealDirective],
  templateUrl: './amenities-section.html',
  styleUrl: './amenities-section.css'
})
export class AmenitiesSectionComponent {
  readonly amenities = siteContent.amenities;
}
