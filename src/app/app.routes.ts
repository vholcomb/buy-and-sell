import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { RenderMode } from '@angular/ssr';
import { environment } from '../environments/environments';

export const routes: Routes = [
  {path: '', redirectTo: '/listings', pathMatch: 'full'},
  {path: 'listings', component: ListingsPageComponent, pathMatch: 'full'},
  {path: 'listings/:id', component: ListingDetailPageComponent},
  {path: 'contact/:id', component: ContactPageComponent},
  {path: 'edit-listing/:id', component: EditListingPageComponent},
  {path: 'my-listings', component: MyListingsPageComponent},
  {path: 'new-listing', component: NewListingPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule,
    CommonModule,
    NgFor,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
})
export class AppRoutingModule { }
