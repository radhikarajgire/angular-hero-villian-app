import { switchMap } from 'rxjs/operators';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'app-hero-villian-detail',
  templateUrl: './hero-villian-detail.component.html',
  styleUrls: ['./hero-villian-detail.component.css'],
})
export class HeroVillianDetailComponent implements OnInit {
  @Input()
  hero!: Hero;
  navigated: boolean = false;
  name: any;
  data: any;
  id?: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) {}
  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const x = this.route.params.forEach((params: Params) => {
      const id = +params['id'];
      this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
    });
  }
}


