import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Subject, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.sass']
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  THRESHOLD_SEARCH = 3;
  searchForm = this.fb.group({
    search: [null]
  })
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private api: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm.controls
      .search
      .valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((value) => {
          if (value){
            let data = value as string;
            return data.length >= this.THRESHOLD_SEARCH;
          }
          return false;
        }),
        switchMap(value => {
          let query = value as unknown as string;
          return this.api.search('c5a8f083', query);
        }),
      ).subscribe(result => console.log(result))
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

}
