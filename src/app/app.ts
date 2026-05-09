import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly theme = inject(ThemeService);
  protected readonly isLoading = signal(true);

  constructor() {
    this.theme.init();
    window.setTimeout(() => this.isLoading.set(false), 650);
  }
}
