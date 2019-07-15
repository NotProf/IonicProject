import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmServiceService} from '../../services/film-service.service';
import {Films} from '../../models/Films';
import {HomePage} from '../home/home.page';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  currentID = 0;
  currentMovie: Films = new Films();
  top: Films[];
  title = 'Movie';
  SelectMovie = true;
  constructor(private activateRoute: ActivatedRoute,
              private filmService: FilmServiceService,
              private home: HomePage) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((param) => {
      this.currentID = Number(param.id);
    });
    this.filmService.getFilmById(this.currentID).subscribe((res) => {
      this.currentMovie = res;
      this.title = this.currentMovie.name;
    });
    this.filmService.getTopTen().subscribe((res) => {
      this.top = res;
    });
  }

  change(check: boolean) {
    this.SelectMovie = check;
  }

  add() {
    this.home.addUserFilm(this.currentID);
  }
}
