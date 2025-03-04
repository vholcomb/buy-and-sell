import { Component } from '@angular/core';
import { Listing } from '../types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listings-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.css'
})
export class ListingsPageComponent {
  listings: Listing[] = [];

  constructor(
    private listingsService: ListingsService
  ) {}

  ngOnInit(): void {
    this.listingsService.getListings().subscribe(listings => this.listings = listings);
  }

}
