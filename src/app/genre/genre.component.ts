import {Component, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {MessageService} from '../../services/message.service';

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
