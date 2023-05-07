import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Villian } from '../models/villian.model';
import { villianUrl, headers } from '../config/api';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VillianService {
  constructor(private http: HttpClient) {}
  getVillians(): Observable<Villian[]> {
    return this.http.get<Villian[]>(villianUrl, { headers: headers }).pipe(
      map((data) => data),
      catchError(this.handleError<Villian[]>('getVillians', []))
    );
  }
  getHero(id: number): Observable<Villian> {
    const url = `https://superhero-search.p.rapidapi.com/api/?id=${id}`;
    return this.http
      .get<Villian>(url, { headers: headers })
      .pipe(catchError(this.handleError<Villian>(`getVillian id=${id}`)));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
