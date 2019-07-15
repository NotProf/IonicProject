import { Component, OnInit } from '@angular/core';
import {FilmServiceService} from '../../services/film-service.service';
import {MoviePage} from '../movie/movie.page';
import {Films} from '../../models/Films';
import {Actors} from '../../models/Actors';

@Component({
  selector: 'app-starring',
  templateUrl: './starring.component.html',
  styleUrls: ['./starring.component.scss'],
})
export class StarringComponent implements OnInit {
  currentMovie: Films = new Films();
  actors: Actors[] = [];
  constructor(private fimsService: FilmServiceService, private moviePage: MoviePage) {
    this.fimsService.getFilmById(this.moviePage.currentID).subscribe((res) => {
      this.currentMovie = res;
      this.actors = this.currentMovie.actors;
    });
  }

  ngOnInit() {}

}
