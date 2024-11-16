import { Component } from "@angular/core";
import { Movie } from "../movie";
import{Movies} from "../movie.datasource";

 @Component({
    selector:'movies',
    templateUrl: './movies.component.html',
    styleUrl:'./movies.component.css'
    

})
export class MoviesComponent{
    title='Movies List';

    movie: Movie = {
        id: 1,
        name: 'Spider-Man'
    };

movies= Movies;
    getTitle() { return this.title; }
    removeMovie(id: number) {
        this.movies = this.movies.filter(movie => movie.id !== id);
      }
    }

