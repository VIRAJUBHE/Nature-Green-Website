import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

import { siteContent } from '../../../../core/data/site-content';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-nearby-section',
  standalone: true,
  imports: [LucideAngularModule, SectionHeadingComponent, RevealDirective],
  templateUrl: './nearby-section.html',
  styleUrl: './nearby-section.css'
})
export class NearbySectionComponent {
  readonly nearby = siteContent.nearby;
}
