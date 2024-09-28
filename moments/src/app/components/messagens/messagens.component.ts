import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messagens',
  templateUrl: './messagens.component.html',
  styleUrl: './messagens.component.css'
})
export class MessagensComponent {

  constructor(public messagensServices: MessageService){}
}
