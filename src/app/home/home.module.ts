import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {TrailerPage} from '../trailer/trailer.page';
import {CacheModule} from 'ionic-cache';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      CacheModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      }
    ])
  ],
  declarations: [HomePage, TrailerPage],
  entryComponents: [TrailerPage]
})
export class HomePageModule {}
