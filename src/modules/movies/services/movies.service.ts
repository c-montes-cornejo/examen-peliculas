import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private _movies: ReplaySubject<Array<Movie>> = new ReplaySubject<Array<Movie>>(1);
  private _movie: ReplaySubject<Movie> = new ReplaySubject<Movie>(1);

  constructor(private http: HttpClient) { }

  get movies$(): Observable<Array<Movie>> {
    return this._movies.asObservable();
  }

  get movie$(): Observable<Movie> {
    return this._movie.asObservable();
  }

  setMovies(movies: Array<Movie>) {
    this._movies.next(movies);
  }

  get(token: string, id: string): Observable<Movie> {
    return this.http.get<Movie>(`https://www.omdbapi.com/`, {params: {apiKey: token, i: id}})
      .pipe(
        tap((movie) => {
          this._movie.next(movie);
        })
      );
  }

  
}
