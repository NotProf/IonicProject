import { Component, OnInit } from '@angular/core';
import {FilmServiceService} from '../../services/film-service.service';
import {MoviePage} from '../movie/movie.page';
import {Films} from '../../models/Films';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.scss'],
})
export class SoundComponent implements OnInit {
   currentMovie: Films = new Films();
  constructor(private filmService: FilmServiceService, private moviePage: MoviePage) { }

  ngOnInit() {
    this.filmService.getFilmById(this.moviePage.currentID).subscribe((res) => {
      this.currentMovie = res;
    });
  }

}
