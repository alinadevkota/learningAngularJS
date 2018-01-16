import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieComponent } from '../movie.component';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { MovieRoutingModule } from '../movie-routing.modules';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  declarations: [
    MovieComponent,
    AddMovieComponent
  ]
})
export class MovieModule { }
