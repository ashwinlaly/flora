import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'flora-flower-listing-page',
    loadChildren: () => import('./pages/flora-flower-listing-page/flora-flower-listing-page.module').then( m => m.FloraFlowerListingPagePageModule)
  },
  {
    path: 'flora-details-page/:id',
    loadChildren: () => import('./pages/flora-details-page/flora-details-page.module').then( m => m.FloraDetailsPagePageModule)
  }
];
@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
