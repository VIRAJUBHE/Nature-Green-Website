import { Component, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

import { siteContent } from '../../../../core/data/site-content';
import {
  ImagePreviewData,
  ImagePreviewDialogComponent
} from '../../../../shared/components/image-preview-dialog/image-preview-dialog';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-floor-plan-section',
  standalone: true,
  imports: [
    LucideAngularModule,
    ImagePreviewDialogComponent,
    SectionHeadingComponent,
    RevealDirective
  ],
  templateUrl: './floor-plan-section.html',
  styleUrl: './floor-plan-section.css'
})
export class FloorPlanSectionComponent {
  readonly content = siteContent;
  readonly plan = siteContent.floorPlan;
  readonly previewPlan = signal<ImagePreviewData | null>(null);

  preview(): void {
    this.previewPlan.set({
      title: this.plan.title,
      src: this.plan.image,
      alt: this.plan.alt,
      description: this.plan.area
    });
  }

  closePreview(): void {
    this.previewPlan.set(null);
  }
}
