import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloraDetailsPagePage } from './flora-details-page.page';

const routes: Routes = [
  {
    path: '',
    component: FloraDetailsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloraDetailsPagePageRoutingModule {}
