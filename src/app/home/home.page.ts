import {Component, OnInit} from '@angular/core';
import {FilmServiceService} from '../../services/film-service.service';
import {Films} from '../../models/Films';
import {ModalController, NavController, PopoverController} from '@ionic/angular';
import {User} from '../../models/User';
import {UserServiceService} from '../../services/user-service.service';
import {TrailerPage} from '../trailer/trailer.page';
import {AppComponent} from '../app.component';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


    constructor(private filmsS: FilmServiceService,
                private nav: NavController,
                private modalController: ModalController,
                private popoverController: PopoverController,
                private userService: UserServiceService) {
    }

    films: Films [] = [];
    filmsAfterSlice: Films [] = [];
    maxSize = 2;
    moreButton;
    currentUser = new User();
    currentID;
    userfilmItar = false;
    selectedGenre = '';
    ngOnInit() {
        this.userService.getCurrentUser().subscribe((res) => {
            this.currentUser = res;
            this.currentID = res.id;
            console.log(res);
        });
        this.filmsS.getFilms().subscribe((res) => {
            this.films = res.reverse();
            this.filmsAfterSlice = this.films.slice(0, this.maxSize);
            this.checkButton();
        });
    }

    async present(id: number) {
        const modal = await this.modalController.create({
            component: TrailerPage,
            componentProps: {
                data: id
            }
        });
        await modal.present();
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

    addUserFilm(idFilm: number) {
        this.userService.getCurrentUser().subscribe((res) => {
            this.currentUser = res;
            this.userfilmItar = false;
            for (let i = 0; i < this.currentUser.usersFilms.length; i++) {
                if (this.currentUser.usersFilms[i].id === idFilm) {
                    this.userfilmItar = true;
                }
            }
            if (this.userfilmItar === false) {
                this.userService.addUserFilm(idFilm).subscribe((res) => {
                    this.currentUser.usersFilms = res;
                    alert('Added');
                });
            } else {
                this.userfilmItar = false;
                alert('Exists');
            }
        });
    }


    genre(event) {
        this.selectedGenre = event.target.value;
        if (this.selectedGenre.toLowerCase() === 'all') {
            this.ngOnInit();
        } else {
            this.filmsS.findByGenre(this.selectedGenre).subscribe((res) => {
                this.films = res;
                this.filmsAfterSlice = this.films.slice(0, this.maxSize);
            });
        }
    }

    refresh(event) {
        setTimeout(() => {
            this.ngOnInit();
            event.target.complete();
       }, 2000);
    }
}
