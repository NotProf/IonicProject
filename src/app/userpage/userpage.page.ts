import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';

@Component({
    selector: 'app-userpage',
    templateUrl: './userpage.page.html',
    styleUrls: ['./userpage.page.scss'],
})
export class UserpagePage implements OnInit {

    constructor() {
    }

    user = new User();

    public upages =
        {
            title: 'Userfilms',
            url: '/userfilms',
        };

    ngOnInit() {
    }

}
