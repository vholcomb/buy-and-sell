import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './listing-data-form.component.html',
  styleUrl: './listing-data-form.component.css'
})
export class ListingDataFormComponent {
  @Input() buttonText = "Save";
  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentPrice = 0;

  name: string = '';
  description: string = '';
  price: number = 0;

  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = Number(this.currentPrice);
  }

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: '',
      name: this.name,
      description: this.description,
      price: Number(this.price)
    });
  }
}
