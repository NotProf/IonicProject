import {Directive, ElementRef, OnInit} from '@angular/core';
import {UserpagePage} from '../app/userpage/userpage.page';
import {MoviePage} from '../app/movie/movie.page';
import {UserServiceService} from '../services/user-service.service';
import {User} from '../models/User';
import {FilmServiceService} from '../services/film-service.service';
import {Films} from '../models/Films';
import {ActivatedRoute} from '@angular/router';

@Directive({
    selector: '[appAddButton]',
    providers: [[UserpagePage], [MoviePage]],
})
export class AddButtonDirective implements OnInit {

    constructor(private elementRef: ElementRef,
                private userP: UserpagePage,
                private movie: MoviePage,
                private userS: UserServiceService,
                private films: FilmServiceService,
                private activateRoute: ActivatedRoute) {
    }

    curUser = new User();

    ngOnInit(): void {
        this.userS.getCurrentUser().subscribe((current) => {
            this.curUser = current;
            console.log(current);
        });

        // setTimeout(() => {
        //     console.log(this.movie.ngOnInit());
        // }, 500);
    }
}
