import {Component, OnInit} from '@angular/core';
import {Films} from '../../models/Films';
import {FilmServiceService} from '../../services/film-service.service';
import {UserServiceService} from '../../services/user-service.service';
import {UserpagePage} from '../userpage/userpage.page';
import {User} from '../../models/User';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-userfilms',
    templateUrl: './userfilms.component.html',
    styleUrls: ['./userfilms.component.scss'],
})
export class UserfilmsComponent implements OnInit {

    constructor(private filmsS: FilmServiceService,
                private userS: UserServiceService,
                private userP: UserpagePage,
                private activatedRoute: ActivatedRoute) {
    }

    uFilms: Films[];
    id: number;

    ngOnInit() {
        this.id = this.userP.currentID;
        this.userS.getUserFilms(this.id).subscribe((res) => {
            this.uFilms = res;
        });

        this.userP.ngOnInit();
    }

    deleteUserFilm(id: number) {
        const b = confirm('Delete this film?');
        if (b === true) {
            this.filmsS.delUserfilms(id).subscribe((res) => {
                this.uFilms = res;
                this.userP.ngOnInit();
            });
        }
    }

}
