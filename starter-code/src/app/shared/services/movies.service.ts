import { Injectable } from '@angular/core';
import { Movie } from './../models/movies.model';
import moviesData from './../data/movies.data';


@Injectable({
  providedIn: 'root'
})
export class MoviesService{
    movies: Array<Movie> = moviesData;

  getMovies(): Array<Movie> {
    return this.movies;
  }

  getMovie(id): Movie {
    return this.movies.find(movie => movie.id === id );
  }
}



