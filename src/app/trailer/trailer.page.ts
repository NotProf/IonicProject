import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {FilmServiceService} from '../../services/film-service.service';
import {Films} from '../../models/Films';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.page.html',
  styleUrls: ['./trailer.page.scss'],
})
export class TrailerPage implements OnInit {
@Input() data: number;
movie: Films = new Films();
  constructor(private nav: NavController,
              private modalController: ModalController,
              private filmService: FilmServiceService) { }

  ngOnInit() {
    console.log(this.data);
    this.filmService.getFilmById(this.data).subscribe((res) => {
      this.movie = res;
    });
  }

    close() {
        this.modalController.dismiss();
    }
}
