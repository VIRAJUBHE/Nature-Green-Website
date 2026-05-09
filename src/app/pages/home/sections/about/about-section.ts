import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

import { siteContent } from '../../../../core/data/site-content';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [LucideAngularModule, RevealDirective],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css'
})
export class AboutSectionComponent {
  readonly content = siteContent;
}
