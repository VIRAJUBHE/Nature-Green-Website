import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

import { siteContent } from '../../../../core/data/site-content';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-highlights-section',
  standalone: true,
  imports: [LucideAngularModule, SectionHeadingComponent, RevealDirective],
  templateUrl: './highlights-section.html',
  styleUrl: './highlights-section.css'
})
export class HighlightsSectionComponent {
  readonly highlights = siteContent.highlights;
}
