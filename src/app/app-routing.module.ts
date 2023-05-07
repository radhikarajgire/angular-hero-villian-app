import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroVillianDetailComponent } from './hero-villian-detail/hero-villian-detail.component';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  // { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'detail/:id', component: HeroVillianDetailComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '**', component: PageNotFoundComponent }
   
 ];
@NgModule({
  imports: [ RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [ RouterModule ],
  
})
export class AppRoutingModule { }
