import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloraFlowerListingPagePageRoutingModule } from './flora-flower-listing-page-routing.module';

import { FloraFlowerListingPagePage } from './flora-flower-listing-page.page';
import { ListingFloraComponent } from 'src/app/components/listing-flora/listing-flora.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloraFlowerListingPagePageRoutingModule
  ],
  declarations: [FloraFlowerListingPagePage, ListingFloraComponent]
})
export class FloraFlowerListingPagePageModule {}
