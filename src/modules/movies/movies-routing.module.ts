import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { ItemComponent } from './components/item/item.component';
import { MovieResolver } from './resolvers/movie.resolver';

const routes: Routes = [
  {
    component: GridComponent,
    path: '',
  },
  {
    component: ItemComponent,
    path: ':id',
    resolve: {
      movie: MovieResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
