import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass']
})
export class GridComponent implements OnInit, OnDestroy{

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  movies$: Observable<Array<Movie>> = new Observable<Array<Movie>>();

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movies$ = this.moviesService.movies$
      .pipe(
        takeUntil(this._unsubscribeAll)
      )
  }
  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

}
