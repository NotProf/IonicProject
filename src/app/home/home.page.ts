import {Component} from '@angular/core';
import {FilmServiceService} from '../../services/film-service.service';
import {Films} from '../../models/Films';
import {NavController} from '@ionic/angular';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private filmsS: FilmServiceService, private nav: NavController) {
    }

    films: Films [] = [];
    filmsAfterSlice: Films [] = [];
    maxSize = 10;
    fullSize = 0;


    ionViewWillEnter() {
        this.filmsS.getFilms().subscribe((res) => {
            this.films = res.reverse();
            this.nextPage(false);
        });
    }

    nextPage(click: boolean) {
        this.fullSize = this.films.length;
        if (click === false) {
            this.filmsAfterSlice = this.films.slice(0, this.maxSize);
        } else {
            const first = 2;
            const last = 4;
            this.filmsAfterSlice = this.films.slice(first, last);
        }
    }


    previousPage() {
        const first = 0;
        const last = 2;
        this.filmsAfterSlice = this.films.slice(first, last);
    }

    SearchBy(genre: string) {
        this.filmsS.findByGenre(genre).subscribe((res) => {
            this.films = res;
            this.filmsAfterSlice = this.films.slice(0, this.maxSize);
        });
    }
    sendSearchForm(form: NgForm) {
        if (form.value.search !== '') {
            this.filmsS.findSearchingFilm(form.value.search).subscribe(res => {
                this.films = res;
                this.filmsAfterSlice = this.films.slice(0, this.maxSize);
            });
        } else {
            this.filmsS.getFilms().subscribe((res) => {
                this.films = res.reverse();
                this.filmsAfterSlice = this.films.slice(0, this.maxSize);
            });
        }
    }

}
