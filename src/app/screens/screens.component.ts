import { Component, OnInit } from '@angular/core';
import {FilmServiceService} from '../../services/film-service.service';
import {MoviePage} from '../movie/movie.page';
import {Films} from '../../models/Films';

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.scss'],
})
export class ScreensComponent implements OnInit {
currentMovie: Films = new Films();
  constructor(private filmService: FilmServiceService, private  moviePage: MoviePage) { }

  ngOnInit() {
    this.filmService.getFilmById(this.moviePage.currentID).subscribe((res) => {
      this.currentMovie = res;
    });
  }

}
