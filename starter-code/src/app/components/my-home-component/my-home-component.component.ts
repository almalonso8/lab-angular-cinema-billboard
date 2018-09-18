import { Movie } from './../../shared/models/movies.model';
import { MoviesService } from './../../shared/services/movies.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent {

  constructor(
    private MoviesService: MoviesService,
    private router: Router
  ) { }

  movies: Array<Movie> = this.MoviesService.getMovies();

}
