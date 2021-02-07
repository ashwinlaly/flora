import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloraFlowerListingPagePage } from './flora-flower-listing-page.page';

const routes: Routes = [
  {
    path: '',
    component: FloraFlowerListingPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloraFlowerListingPagePageRoutingModule {}
