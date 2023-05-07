import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from './services/hero.service';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import {MatGridListModule} from '@angular/material/grid-list';
// import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from "@angular/material/icon";
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HeroVillianDetailComponent } from './hero-villian-detail/hero-villian-detail.component';
import { Search2Component} from './search2/search2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatIconModule
  ],
   declarations: [
    AppComponent,
    HeroVillianDetailComponent,
    SearchComponent,
    FavoritesComponent,
    Search2Component,
    PageNotFoundComponent
  ],
  // providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
