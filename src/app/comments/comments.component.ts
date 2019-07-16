import { Component, OnInit } from '@angular/core';
import {Comments} from '../../models/Comments';
import {Films} from '../../models/Films';
import {FilmServiceService} from '../../services/film-service.service';
import {MoviePage} from '../movie/movie.page';
import {DatePipe} from '@angular/common';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  providers: [DatePipe]
})
export class CommentsComponent implements OnInit {
  comments: Comments[] = [];
  currentFilm: Films = new Films();
  authUser = localStorage.getItem('_token') != null;
  constructor(private filmService: FilmServiceService,
              private moviePage: MoviePage,
              private datepipe: DatePipe) {
  }

  ngOnInit() {
    this.filmService.getComments(this.moviePage.currentID).subscribe((res) => {
      this.comments = res.reverse();
    });
    this.filmService.getFilmById(this.moviePage.currentID).subscribe(res => {
      this.currentFilm = res;
    });
  }

  add(form: NgForm) {
    const date = this.datepipe.transform(new Date(), 'dd-MM-yyyy, HH:mm');
    const fd = new FormData();
    fd.append('text', form.value.text);
    fd.append('idfilm', this.moviePage.currentID.toString());
    fd.append('date' , date);
    this.filmService.addComment(fd).subscribe(() => this.ngOnInit());
    form.onReset();
  }

}
