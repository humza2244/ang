import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../../components/header/header';
import { ListingCard } from '../../components/listing-card/listing-card';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, FormsModule, Header, ListingCard],
  templateUrl: './browse.html',
  styleUrl: './browse.scss',
})
export class Browse {

}
