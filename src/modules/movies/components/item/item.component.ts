import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit, OnDestroy {

  private _unsubscribeAll: Subject<any> = new Subject<any>();
  movie$: Observable<Movie> = new Observable<Movie>();

  constructor(private moviesService: MoviesService, private route: ActivatedRoute,){}

  ngOnInit(): void {
    this.route.data.subscribe(
      data => {
        if(data['movie']){
          this.movie$ = this.moviesService.movie$.pipe(
            takeUntil(this._unsubscribeAll)
          )
        }
      }
    );
  }
  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

}
