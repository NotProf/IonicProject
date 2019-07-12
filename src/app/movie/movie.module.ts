import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MoviePage } from './movie.page';
import {AboutComponent} from '../about/about.component';
import {ScreensComponent} from '../screens/screens.component';
import {SoundComponent} from '../sound/sound.component';
import {CommentsComponent} from '../comments/comments.component';
import {StarringComponent} from '../starring/starring.component';
import {IonicRatingModule} from "ionic4-rating/dist";


const routes: Routes = [
  {
    path: '',
    component: MoviePage,
    children: [{
      path: 'about-movie',
      component: AboutComponent
    },
      {
        path: 'screens',
        component: ScreensComponent
      },
      {
        path: 'soundTracks',
        component: SoundComponent
      },
      {
        path: 'comments',
        component: CommentsComponent
      },
      {
        path: 'starring',
        component: StarringComponent
      }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      IonicRatingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MoviePage,
                 AboutComponent,
                 ScreensComponent,
                 SoundComponent,
                 StarringComponent,
                 CommentsComponent]
})
export class MoviePageModule {}
