import { Component } from '@angular/core';
import { Moment } from '../../../Interfaces/Moments';
import { environment } from '../../../../environments/environment';
import { MomentService } from '../../../services/moment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl = environment.baseApiUrl;

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data;

      data.map((item) => {
        item.create_at = new Date(item.create_at!).toLocaleString('pt-BR');
      });

      this.allMoments = data;
      this.moments = data;
    });
  }
}
