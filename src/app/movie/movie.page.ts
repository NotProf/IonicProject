import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmServiceService} from '../../services/film-service.service';
import {Films} from '../../models/Films';
import {HomePage} from '../home/home.page';
import {User} from '../../models/User';
import {UserServiceService} from '../../services/user-service.service';
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
  currentUser: User;
  userfilmItar = false;
  constructor(private activateRoute: ActivatedRoute,
              private filmService: FilmServiceService,
              private home: HomePage,
              private userService: UserServiceService) { }

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
    this.checkUserFilm();
  }
  checkUserFilm() {
    this.userService.getCurrentUser().subscribe((res) => {
      this.currentUser = res;
      for (let i = 0; i < this.currentUser.usersFilms.length; i++) {
        if (this.currentUser.usersFilms[i].id === this.currentID) {
          this.userfilmItar = true;
        }
      }
    });
  }

  change(check: boolean) {
    this.SelectMovie = check;
  }

  add() {
    this.home.addUserFilm(this.currentID);
    setTimeout(() => {
      this.checkUserFilm();
    }, 200);
  }
}
