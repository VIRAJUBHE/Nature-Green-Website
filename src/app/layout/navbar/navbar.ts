import { DOCUMENT } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

import { siteContent } from '../../core/data/site-content';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  private readonly document = inject(DOCUMENT);
  readonly theme = inject(ThemeService);
  readonly content = siteContent;
  readonly isOpen = signal(false);
  readonly activeSection = signal('home');
  readonly isScrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 16);

    const sections = ['home', ...this.content.navItems.map((item) => item.href)];
    let active = 'home';

    for (const id of sections) {
      const element = this.document.getElementById(id);
      if (element && element.getBoundingClientRect().top <= 120) {
        active = id;
      }
    }

    this.activeSection.set(active);
  }

  scrollTo(id: string): void {
    this.document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.isOpen.set(false);
  }
}
