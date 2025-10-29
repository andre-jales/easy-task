import { Component, signal } from '@angular/core';
import { Header } from './header';

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('easy-task');
}
