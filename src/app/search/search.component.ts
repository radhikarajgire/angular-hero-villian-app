import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { VillianService } from '../services/villian.service';
import { Hero } from '../models/hero.model';
import { Villian } from '../models/villian.model';
import { Router } from '@angular/router';
import { Favorite } from '../models/favorite.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public searchQuery = '';
  villians: Villian[] = [];
  heroes: Hero[] = [];
  results: [] = [];
  selectedHero: Hero | undefined;
  error: any;
  session: any;
  loadComponent: boolean = false;
  favorites: Favorite[] = JSON.parse(localStorage.getItem('favorites') || '{}');
  constructor(
    private router: Router,
    private heroService: HeroService,
    private villianService: VillianService
  ) {}

  ngOnInit(): void {
    this.loadHeros();
    this.loadVillians();
  }
  searchText: string = '';

  getFavorites() {
    let favorites;
    if (localStorage.getItem('favorites') === null) {
      favorites = [];
    } else {
      favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
      console.log(favorites);
    }
    return favorites;
  }

  onSearchTextEntered(seacrhValue: string) {
    this.searchText = seacrhValue;
    console.log(this.searchText);
  }

  gotoDetailHero(hero: Hero): void {
    const link = ['/detail', hero.id];
    console.log(hero);
    this.router.navigate(link);
  }
  gotoDetailVillian(villian: Villian): void {
    const link = ['/detail', villian.id];
    this.router.navigate(link);
  }

  goBack() {
    this.router.navigate(['/search']);
  }

  addToFavoritesHero(hero: Hero) {
    let favorites = this.getFavorites();
    favorites.push(hero);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  addToFavoritesVillian(villian: Villian) {
    let favorites = this.getFavorites();
    favorites.push(villian);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  loadData() {
    let data: any = localStorage.getItem('session');
    this.session = JSON.parse(data);
  }
  loadHeros() {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  loadVillians() {
    this.villianService.getVillians().subscribe((villians) => {
      this.villians = villians;
      //  console.log(villians);
    });
  }
}
