import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly theme = inject(ThemeService);
  protected readonly isLoading = signal(true);

  constructor() {
    this.theme.init();

    if (isPlatformBrowser(this.platformId)) {
      window.setTimeout(() => this.isLoading.set(false), 650);
    } else {
      this.isLoading.set(false);
    }
  }
}
