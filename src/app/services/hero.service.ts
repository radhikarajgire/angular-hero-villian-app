import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Hero } from '../models/hero.model';
import { headers, heroUrl, baseUrl } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private http: HttpClient) {}

  getHero(id: number): Observable<Hero> {
    const url = `https://superhero-search.p.rapidapi.com/api/?id=${id}`;
    return this.http
      .get<Hero>(url, { headers: headers })
      .pipe(catchError(this.handleError<Hero>(`getHero id=${id}`)));
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(heroUrl, { headers: headers }).pipe(
      map((data) => data),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}

