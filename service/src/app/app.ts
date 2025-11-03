import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <h1>Aula de Services</h1>
  <router-outlet></router-outlet>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('service');
}
