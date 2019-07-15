import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {UserServiceService} from '../../services/user-service.service';
import {UserpagePage} from '../userpage/userpage.page';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss'],
})
export class FollowersComponent implements OnInit {

  id: number;
  followers: User[];

  constructor(private userService: UserServiceService, private userPage: UserpagePage) { }

  ngOnInit() {
    this.id = this.userPage.currentID;
    this.userService.getSubscribes(this.id).subscribe((res) => {
      this.followers = res;
    });
  }

}
