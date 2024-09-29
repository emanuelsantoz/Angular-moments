import { Component } from '@angular/core';
import { Moment } from '../../../Interfaces/Moments';
import { MomentService } from '../../../services/moment.service';
import { MessageService } from '../../../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent {
  btnText:string = "Compartilhar"

  constructor(
    private moment: MomentService,
    private messageService:MessageService,
    private router:Router){}

  async createHandler(moment: Moment){
    const formData = new FormData();

    formData.append("title", moment.title);
    formData.append("description", moment.description);

    if(moment.image){
      formData.append('image', moment.image);
    }


    await this.moment.createMoment(formData);

    this.messageService.add("Momento adicionado com sucesso!");

    this.router.navigate(['/']);
  }
}
