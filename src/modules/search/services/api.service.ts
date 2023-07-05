import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Search } from '../models/search';
import { MoviesService } from 'src/modules/movies/services/movies.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private moviesService: MoviesService) {}

  search(token: string, query: string): Observable<Search>{
    return this.http.get<Search>(`https://www.omdbapi.com/`, {params: {apiKey: token, s: query}})
      .pipe(
        tap(results => this.moviesService.setMovies(results.Search))
      );
  }
}
