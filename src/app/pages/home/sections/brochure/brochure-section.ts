import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

import { siteContent } from '../../../../core/data/site-content';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-brochure-section',
  standalone: true,
  imports: [LucideAngularModule, RevealDirective],
  templateUrl: './brochure-section.html',
  styleUrl: './brochure-section.css'
})
export class BrochureSectionComponent {
  readonly content = siteContent;
}
