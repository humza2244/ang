import { Routes } from '@angular/router';
import { Browse } from './pages/browse/browse';
import { ListingDetails } from './pages/listing-details/listing-details';
import { Login } from './pages/login/login';
import { Sell } from './pages/sell/sell';

export const routes: Routes = [
  { path: '', redirectTo: '/browse', pathMatch: 'full' },
  { path: 'browse', component: Browse },
  { path: 'listing/:id', component: ListingDetails },
  { path: 'login', component: Login },
  { path: 'sell', component: Sell }
];
