import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../../components/header/header';
import { ListingCard } from '../../components/listing-card/listing-card';
import { ListingService, Listing } from '../../services/listing.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, FormsModule, Header, ListingCard],
  templateUrl: './browse.html',
  styleUrl: './browse.scss',
})
export class Browse implements OnInit {
  listings: Listing[] = [];
  filteredListings: Listing[] = [];
  searchQuery: string = '';
  selectedCategory: string = 'All Categories';
  selectedLocation: string = 'All Locations';
  selectedSort: string = 'newest';

  constructor(private listingService: ListingService) {}

  ngOnInit() {
    this.loadListings();
  }

  loadListings() {
    this.listings = this.listingService.getAllListings();
    this.applyFilters();
  }

  applyFilters() {
    let filtered = this.listingService.filterListings(
      this.selectedCategory,
      this.selectedLocation
    );

    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(listing =>
        listing.title.toLowerCase().includes(query) ||
        listing.description.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    switch (this.selectedSort) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        // newest (default order)
        break;
    }

    this.filteredListings = filtered;
  }

  onSearch() {
    this.applyFilters();
  }

  onFilterChange() {
    this.applyFilters();
  }
}
