import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ListingCard } from './components/listing-card/listing-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ListingCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('first-ng-app');
}
