import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-my-listings-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './my-listings-page.component.html',
  styleUrl: './my-listings-page.component.css'
})
export class MyListingsPageComponent {
  listings: Listing[] = [];

  constructor(
    private listingsService: ListingsService
  ) {}


  ngOnInit(): void {
    this.listingsService.getListingsForUser().subscribe(listings => {
      this.listings = listings;
    });
  }

  onDeleteClicked(listingId: string): void {
    this.listingsService.deleteListing(listingId).subscribe(() => {
      this.listings = this.listings.filter(listing => listing.id !== listingId);
    });
  }
}
