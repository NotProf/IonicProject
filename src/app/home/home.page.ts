import {Component, OnInit} from '@angular/core';
import {FilmServiceService} from '../../services/film-service.service';
import {Films} from '../../models/Films';
import {NavController, PopoverController} from '@ionic/angular';
import {NgForm} from '@angular/forms';
import {GenreComponent} from '../genre/genre.component';
import {MessageService} from '../../services/message.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    providers: [MessageService]
})
export class HomePage implements OnInit {
message = '';
    constructor(private filmsS: FilmServiceService,
                private popoverController: PopoverController,
                private massageService: MessageService) {
        this.massageService.getMessage().subscribe((res) => {
            this.message = res;
        });
    }

    films: Films [] = [];
    filmsAfterSlice: Films [] = [];
    maxSize = 2;
    moreButton;


    ionViewWillEnter() {
        this.filmsS.getFilms().subscribe((res) => {
            this.films = res.reverse();
            this.filmsAfterSlice = this.films.slice(0, this.maxSize);
            this.checkButton();
        });
    }

    async present(event) {
        const popover  = await this.popoverController.create({
            component: GenreComponent,
            event
        });
        await popover.present();
    }
    checkButton() {
        if (this.films.length >= this.maxSize) {
            this.moreButton = true;
        } else {
            this.moreButton = false;
        }
    }
    showMore() {
        this.maxSize += 2;
        this.filmsAfterSlice = this.films.slice(0, this.maxSize);
        this.checkButton();
    }

    SearchBy(genre: string) {
        this.filmsS.findByGenre(genre).subscribe((res) => {
            this.films = res;
            this.filmsAfterSlice = this.films.slice(0, this.maxSize);
        });
    }
    sendSearchForm(event) {
        const form = event.target.value;
        if (form !== '') {
            this.filmsS.findSearchingFilm(form).subscribe(res => {
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

    ngOnInit(): void {
    }

}
