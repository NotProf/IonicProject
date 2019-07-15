import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserServiceService} from '../../services/user-service.service';
import {UserpagePage} from '../userpage/userpage.page';

@Component({
    selector: 'app-following',
    templateUrl: './following.component.html',
    styleUrls: ['./following.component.scss'],
})
export class FollowingComponent implements OnInit {

    id: number;
    followings: User[];

    constructor(private userService: UserServiceService, private userPage: UserpagePage) {
    }

    ngOnInit() {
        this.id = this.userPage.currentID;
        this.userService.getFolowing(this.id).subscribe((res) => {
            this.followings = res;
        });
    }

}
