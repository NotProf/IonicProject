import { Component, OnInit } from '@angular/core';
import {MoviePage} from '../movie/movie.page';
import {Films} from '../../models/Films';
import {FilmServiceService} from '../../services/film-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  constructor(private moviePage: MoviePage, private filmService: FilmServiceService) { }
  currentMovie: Films = new Films() ;
  ngOnInit() {
   this.filmService.getFilmById(this.moviePage.currentID).subscribe((res) => {
     this.currentMovie = res;
   });
  }

}
