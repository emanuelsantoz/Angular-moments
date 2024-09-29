import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Moment } from '../Interfaces/Moments';
import { Response } from '../Interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private urlApiBase = environment.baseApiUrl;
  private apiUrl = `${this.urlApiBase}api/moments`;

  constructor(private http: HttpClient) { }

  getMoments(): Observable<Response<Moment[]>>{
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  }

  createMoment(formData: FormData): Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl, formData);
  }

}
