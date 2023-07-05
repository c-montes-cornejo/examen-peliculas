import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { GridComponent } from './components/grid/grid.component';
import { ItemComponent } from './components/item/item.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    GridComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MoviesRoutingModule
  ],
  exports: [
    GridComponent,
    ItemComponent
  ]
})
export class MoviesModule { }
