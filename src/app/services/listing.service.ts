import { Injectable } from '@angular/core';

export interface Listing {
  id: number;
  title: string;
  price: number;
  category: string;
  location: string;
  condition: string;
  description: string;
  image: string;
  seller: {
    name: string;
    rating: number;
    reviews: number;
    memberSince: string;
  };
  postedDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private listings: Listing[] = [
    {
      id: 1,
      title: 'MacBook Pro 2021',
      price: 1200,
      category: 'Electronics',
      location: 'Waterloo',
      condition: 'Excellent',
      description: 'Excellent condition MacBook Pro 2021. 13-inch display, M1 chip, 16GB RAM, 512GB SSD. Perfect for students or professionals. Comes with original charger and box. No scratches or dents. Battery health at 95%.',
      image: 'assets/papersol.png',
      seller: {
        name: 'John Doe',
        rating: 4.8,
        reviews: 24,
        memberSince: '2023'
      },
      postedDate: '2 days ago'
    },
    {
      id: 2,
      title: 'iPhone 13 Pro',
      price: 850,
      category: 'Electronics',
      location: 'Toronto',
      condition: 'Like New',
      description: 'iPhone 13 Pro in pristine condition. 256GB storage, Sierra Blue color. Includes original box, charger, and unused accessories. Always kept in a case with screen protector.',
      image: 'assets/papersol1.png',
      seller: {
        name: 'Sarah Smith',
        rating: 4.9,
        reviews: 18,
        memberSince: '2022'
      },
      postedDate: '1 day ago'
    },
    {
      id: 3,
      title: 'Sony WH-1000XM4 Headphones',
      price: 280,
      category: 'Electronics',
      location: 'Waterloo',
      condition: 'Good',
      description: 'Premium noise-cancelling headphones in good working condition. Minor wear on ear pads. Comes with carrying case and all cables. Battery life still excellent.',
      image: 'assets/papersol.png',
      seller: {
        name: 'Mike Johnson',
        rating: 4.7,
        reviews: 31,
        memberSince: '2021'
      },
      postedDate: '3 days ago'
    },
    {
      id: 4,
      title: 'IKEA Office Desk',
      price: 120,
      category: 'Furniture',
      location: 'Ottawa',
      condition: 'Good',
      description: 'Sturdy office desk from IKEA. White finish, minimal scratches. Dimensions: 120cm x 60cm. Great for home office or student use.',
      image: 'assets/papersol1.png',
      seller: {
        name: 'Emma Wilson',
        rating: 4.6,
        reviews: 12,
        memberSince: '2023'
      },
      postedDate: '5 days ago'
    },
    {
      id: 5,
      title: 'Gaming Chair',
      price: 200,
      category: 'Furniture',
      location: 'Toronto',
      condition: 'Excellent',
      description: 'Ergonomic gaming chair with lumbar support. Barely used, like new condition. Black and red design. Height adjustable with 360-degree swivel.',
      image: 'assets/papersol.png',
      seller: {
        name: 'Alex Brown',
        rating: 4.9,
        reviews: 27,
        memberSince: '2022'
      },
      postedDate: '1 week ago'
    },
    {
      id: 6,
      title: 'Canon EOS R6',
      price: 2200,
      category: 'Electronics',
      location: 'Montreal',
      condition: 'Like New',
      description: 'Professional mirrorless camera with 24-105mm lens. Low shutter count. Perfect for photography enthusiasts. Includes memory cards and camera bag.',
      image: 'assets/papersol1.png',
      seller: {
        name: 'David Lee',
        rating: 5.0,
        reviews: 15,
        memberSince: '2021'
      },
      postedDate: '4 days ago'
    },
    {
      id: 7,
      title: 'Mountain Bike',
      price: 450,
      category: 'Vehicles',
      location: 'Waterloo',
      condition: 'Good',
      description: 'Trek mountain bike, 21-speed. Well maintained with new tires. Great for trails and city riding. Minor cosmetic wear.',
      image: 'assets/papersol.png',
      seller: {
        name: 'Lisa Chen',
        rating: 4.8,
        reviews: 9,
        memberSince: '2023'
      },
      postedDate: '6 days ago'
    },
    {
      id: 8,
      title: 'PlayStation 5',
      price: 550,
      category: 'Electronics',
      location: 'Toronto',
      condition: 'Excellent',
      description: 'PS5 console in excellent condition. Includes two controllers and 3 games. All original packaging included. Rarely used.',
      image: 'assets/papersol1.png',
      seller: {
        name: 'Tom Anderson',
        rating: 4.7,
        reviews: 20,
        memberSince: '2022'
      },
      postedDate: '2 days ago'
    },
    {
      id: 9,
      title: 'Winter Jacket - North Face',
      price: 180,
      category: 'Clothing',
      location: 'Ottawa',
      condition: 'Like New',
      description: 'North Face winter jacket, size Large. Worn only twice. Black color, excellent insulation. Perfect for Canadian winters.',
      image: 'assets/papersol.png',
      seller: {
        name: 'Rachel Green',
        rating: 4.9,
        reviews: 14,
        memberSince: '2023'
      },
      postedDate: '3 days ago'
    },
    {
      id: 10,
      title: 'Textbooks Bundle - Computer Science',
      price: 150,
      category: 'Books',
      location: 'Waterloo',
      condition: 'Good',
      description: 'Bundle of CS textbooks: Data Structures, Algorithms, and Operating Systems. Some highlighting but in good condition.',
      image: 'assets/papersol1.png',
      seller: {
        name: 'Kevin Zhang',
        rating: 4.6,
        reviews: 8,
        memberSince: '2023'
      },
      postedDate: '1 week ago'
    },
    {
      id: 11,
      title: 'iPad Air 2022',
      price: 650,
      category: 'Electronics',
      location: 'Montreal',
      condition: 'Excellent',
      description: 'iPad Air latest model. 64GB, WiFi only. Space Gray. Includes Apple Pencil and keyboard case. Perfect for students.',
      image: 'assets/papersol.png',
      seller: {
        name: 'Sophie Martin',
        rating: 5.0,
        reviews: 22,
        memberSince: '2021'
      },
      postedDate: '2 days ago'
    },
    {
      id: 12,
      title: 'Coffee Table - Modern Design',
      price: 95,
      category: 'Furniture',
      location: 'Toronto',
      condition: 'Good',
      description: 'Modern glass and wood coffee table. Some minor scratches on glass surface. Dimensions: 100cm x 60cm x 45cm.',
      image: 'assets/papersol1.png',
      seller: {
        name: 'James Kim',
        rating: 4.5,
        reviews: 16,
        memberSince: '2022'
      },
      postedDate: '4 days ago'
    }
  ];

  getAllListings(): Listing[] {
    return this.listings;
  }

  getListingById(id: number): Listing | undefined {
    return this.listings.find(listing => listing.id === id);
  }

  filterListings(category?: string, location?: string): Listing[] {
    let filtered = this.listings;
    
    if (category && category !== 'All Categories') {
      filtered = filtered.filter(listing => listing.category === category);
    }
    
    if (location && location !== 'All Locations') {
      filtered = filtered.filter(listing => listing.location === location);
    }
    
    return filtered;
  }

  searchListings(query: string): Listing[] {
    const lowerQuery = query.toLowerCase();
    return this.listings.filter(listing => 
      listing.title.toLowerCase().includes(lowerQuery) ||
      listing.description.toLowerCase().includes(lowerQuery) ||
      listing.category.toLowerCase().includes(lowerQuery)
    );
  }
}
