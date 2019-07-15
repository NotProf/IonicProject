import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {UserServiceService} from '../../services/user-service.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  users: User[];
  partUser: User[];
  size = 8;
  current = 0;


  constructor(private userService: UserServiceService) { }

  ngOnInit() {

    this.userService.getAllUser().subscribe((res) => {
      if (res === null) {
        console.log('No Users');
      } else {
        this.users = res;
        this.partUser = this.users.slice(0, this.size);
      }
    });
  }

}
