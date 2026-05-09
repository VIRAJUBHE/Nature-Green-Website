import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

import { siteContent } from '../../../../core/data/site-content';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSectionComponent {
  readonly content = siteContent;
}
