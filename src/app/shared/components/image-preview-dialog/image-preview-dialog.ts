import { Component, input, output, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

export interface ImagePreviewData {
  title: string;
  src: string;
  alt: string;
  description?: string;
  mediaType?: 'image' | 'video';
}

@Component({
  selector: 'app-image-preview-dialog',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './image-preview-dialog.html',
  styleUrl: './image-preview-dialog.css'
})
export class ImagePreviewDialogComponent {
  readonly data = input.required<ImagePreviewData>();
  readonly closed = output<void>();
  readonly zoom = signal(1);

  close(): void {
    this.closed.emit();
  }

  zoomIn(): void {
    this.zoom.update((value) => Math.min(2.2, Number((value + 0.2).toFixed(2))));
  }

  zoomOut(): void {
    this.zoom.update((value) => Math.max(0.7, Number((value - 0.2).toFixed(2))));
  }
}
