import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  templateUrl: './section-heading.html',
  styleUrl: './section-heading.css'
})
export class SectionHeadingComponent {
  readonly kicker = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input<string>('');
  readonly align = input<'left' | 'center'>('left');
  readonly tone = input<'default' | 'inverse'>('default');
}
