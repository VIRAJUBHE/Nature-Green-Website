import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

import { siteContent } from '../../core/data/site-content';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  readonly content = siteContent;
  readonly year = new Date().getFullYear();

  sectionId(label: string): string {
    if (label === 'Plans') {
      return 'floor-plans';
    }

    return label.toLowerCase();
  }
}
