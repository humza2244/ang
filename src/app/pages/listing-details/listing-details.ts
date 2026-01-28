import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Header } from '../../components/header/header';
import { ListingService, Listing } from '../../services/listing.service';

@Component({
  selector: 'app-listing-details',
  standalone: true,
  imports: [CommonModule, Header],
  templateUrl: './listing-details.html',
  styleUrl: './listing-details.scss',
})
export class ListingDetails implements OnInit {
  listing: Listing | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingService: ListingService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.listing = this.listingService.getListingById(parseInt(id));
      if (!this.listing) {
        // If listing not found, redirect to browse
        this.router.navigate(['/browse']);
      }
    }
  }

  contactSeller() {
    alert(`Contact ${this.listing?.seller.name} about "${this.listing?.title}"`);
  }

  saveForLater() {
    alert(`"${this.listing?.title}" saved to your favorites!`);
  }

  getSellerInitials(): string {
    if (!this.listing) return '';
    const names = this.listing.seller.name.split(' ');
    return names.map(n => n[0]).join('');
  }
}
