import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
  goToGoogle() {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    if (/android/i.test(userAgent)) {
      window.location.href = 'intent://www.google.com/#Intent;scheme=https;package=com.android.chrome;end';
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.location.href = 'https://www.google.com';
    } else {
      window.location.href = 'https://www.google.com';
    }
  }
}
