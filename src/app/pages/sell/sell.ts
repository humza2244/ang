import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [CommonModule, FormsModule, Header],
  templateUrl: './sell.html',
  styleUrl: './sell.scss',
})
export class Sell {
  listing = {
    title: '',
    description: '',
    price: 0,
    category: '',
    condition: '',
    location: '',
    contactEmail: '',
    contactPhone: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    if (this.isFormValid()) {
      alert(`Listing "${this.listing.title}" created successfully!\n\nPrice: $${this.listing.price}\nCategory: ${this.listing.category}\nLocation: ${this.listing.location}`);
      this.router.navigate(['/browse']);
    } else {
      alert('Please fill in all required fields!');
    }
  }

  onCancel() {
    if (confirm('Are you sure you want to cancel? All changes will be lost.')) {
      this.router.navigate(['/browse']);
    }
  }

  isFormValid(): boolean {
    return !!(
      this.listing.title &&
      this.listing.description &&
      this.listing.price > 0 &&
      this.listing.category &&
      this.listing.condition &&
      this.listing.location &&
      this.listing.contactEmail
    );
  }
}
