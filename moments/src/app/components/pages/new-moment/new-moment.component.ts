import { Component } from '@angular/core';
import { Moment } from '../../../Interfaces/Moments';
import { MomentService } from '../../../services/moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent {
  btnText:string = "Compartilhar"

  constructor(private moment: MomentService){}

  async createHandler(moment: Moment){
    const formData = new FormData();

    formData.append("title", moment.title);
    formData.append("description", moment.description);

    if(moment.image){
      formData.append('image', moment.image);
    }


    await this.moment.createMoment(formData);
  }
}
