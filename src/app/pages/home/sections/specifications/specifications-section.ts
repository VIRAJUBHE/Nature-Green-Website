import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

import { siteContent } from '../../../../core/data/site-content';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-specifications-section',
  standalone: true,
  imports: [LucideAngularModule, SectionHeadingComponent, RevealDirective],
  templateUrl: './specifications-section.html',
  styleUrl: './specifications-section.css'
})
export class SpecificationsSectionComponent {
  readonly specifications = siteContent.specifications;
}
