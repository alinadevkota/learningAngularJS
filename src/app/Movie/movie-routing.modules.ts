import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';

const routes: Routes = [
  { path: 'addMovie', component: AddMovieComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class MovieRoutingModule { }

