import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserpagePage } from './userpage.page';
import {UserfilmsComponent} from '../userfilms/userfilms.component';
import {FollowersComponent} from '../followers/followers.component';

const routes: Routes = [
  {
    path: '',
    component: UserpagePage, children: [
      {path: 'userfilms', component: UserfilmsComponent},
      {path: 'followers', component: FollowersComponent},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserpagePage, UserfilmsComponent, FollowersComponent]
})
export class UserpagePageModule {}
