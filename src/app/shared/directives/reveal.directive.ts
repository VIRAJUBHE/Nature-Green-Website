import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  inject,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  @HostBinding('class.reveal') readonly revealClass = true;
  @HostBinding('class.is-visible') isVisible = false;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          this.observer?.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -72px 0px' }
    );

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
