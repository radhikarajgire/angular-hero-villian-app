import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Favorite } from '../models/favorite.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  @Input() favorites: Favorite[] | undefined;
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    let favorites = localStorage.getItem('favorites');
    if (favorites) {
      this.favorites = JSON.parse(favorites);
    }
  }
  
  //   removeFavorite(id: number): void {
  // this.favorites = this.favorites.filter((favorite) => favorite.id !== id);
  // localStorage.setItem('favorites', JSON.stringify(this.favorites));
  // };
}
