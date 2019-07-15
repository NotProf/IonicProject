import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceService} from '../services/user-service.service';
import {User} from '../models/User';
import {FilmServiceService} from '../services/film-service.service';
import {HomePage} from './home/home.page';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

    currentUser = new User();
    currentID = 0;
    mes = '';

    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Top',
            url: '/top',
            icon: 'star'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private router: Router,
        private userService: UserServiceService,
        private filmService: FilmServiceService,
        private home: HomePage
    ) {
    }


    ngOnInit() {
        this.userService.getCurrentUser().subscribe((res) => {
            this.currentUser = res;
            this.currentID = res.id;
        }, () => this.mes = 'Please login');
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            if (localStorage.getItem('_token') != null) {
                this.router.navigateByUrl('/home');
            }
        });
    }
}

