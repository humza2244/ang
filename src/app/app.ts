import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { HomeItems } from "./home-items/home-items";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, HomeItems],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('first-ng-app');
}
