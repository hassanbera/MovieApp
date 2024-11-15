import { Component } from "@angular/core";
import { Movie } from "../movie";

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

movies= ['movie1', 'movie2', 'movie3'];
    getTitle() { return this.title; }
    }
