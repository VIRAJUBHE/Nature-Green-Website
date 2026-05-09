import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

import { siteContent } from '../../../../core/data/site-content';
import {
  ImagePreviewDialogComponent,
  ImagePreviewData
} from '../../../../shared/components/image-preview-dialog/image-preview-dialog';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-gallery-section',
  standalone: true,
  imports: [
    LucideAngularModule,
    ImagePreviewDialogComponent,
    SectionHeadingComponent,
    RevealDirective
  ],
  templateUrl: './gallery-section.html',
  styleUrl: './gallery-section.css'
})
export class GallerySectionComponent implements AfterViewInit {
  @ViewChildren('galleryVideo') private readonly galleryVideos!: QueryList<ElementRef<HTMLVideoElement>>;

  readonly gallery = siteContent.gallery;
  readonly previewImage = signal<ImagePreviewData | null>(null);

  ngAfterViewInit(): void {
    this.playGalleryVideos();
    this.galleryVideos.changes.subscribe(() => this.playGalleryVideos());
  }

  preview(image: ImagePreviewData): void {
    this.previewImage.set(image);
  }

  closePreview(): void {
    this.previewImage.set(null);
  }

  private playGalleryVideos(): void {
    this.galleryVideos?.forEach(({ nativeElement }) => {
      nativeElement.muted = true;
      nativeElement.load();
      void nativeElement.play();
    });
  }
}
