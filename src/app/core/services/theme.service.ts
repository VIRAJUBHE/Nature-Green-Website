import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

type ThemeMode = 'light' | 'dark';
const THEME_VERSION = 'green-light-v1';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  readonly mode = signal<ThemeMode>('light');

  init(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const stored = window.localStorage.getItem('nature-green-theme') as ThemeMode | null;
    const storedVersion = window.localStorage.getItem('nature-green-theme-version');

    if (storedVersion !== THEME_VERSION) {
      window.localStorage.setItem('nature-green-theme-version', THEME_VERSION);
      this.setTheme('light');
      return;
    }

    this.setTheme(stored ?? 'light');
  }

  toggle(): void {
    this.setTheme(this.mode() === 'dark' ? 'light' : 'dark');
  }

  setTheme(mode: ThemeMode): void {
    this.mode.set(mode);
    this.document.documentElement.classList.toggle('dark', mode === 'dark');
    this.document.documentElement.setAttribute('data-theme', mode);

    if (isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem('nature-green-theme', mode);
    }
  }
}
