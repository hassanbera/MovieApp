import { Component } from "@angular/core";
import { Movie } from "../movie";

 @Component({
    selector:'movies',
    template:`
    
    <h2>{{"Title: "+getTitle()}}</h2>
    <div>{{movie.id}}</div>
    <div>{{movie.name}}</div>`
})
export class MoviesComponent{
    title='Movies List';

    movie: Movie = {
        id: 1,
        name: 'Spider-Man'
    }

    getTitle() { return this.title; }
    }
