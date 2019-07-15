import { Component, OnInit } from '@angular/core';
import {HomePage} from '../home/home.page';
import {PopoverController} from '@ionic/angular';
import {MessageService} from '../../services/message.service';
import {MoviePage} from '../movie/movie.page';
import {MoviePageModule} from '../movie/movie.module';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
  providers: [MessageService]
})
export class GenreComponent implements OnInit {

  constructor( private popoverController: PopoverController,
               private messageService: MessageService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.messageService.sendMessage('genre');
    console.log('aaa');
  }
}
