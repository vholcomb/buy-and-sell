import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listing-detail-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './listing-detail-page.component.html',
  styleUrl: './listing-detail-page.component.css'
})
export class ListingDetailPageComponent {
  listing: Listing | undefined;

  constructor(private route: ActivatedRoute, ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id);
  }
}
