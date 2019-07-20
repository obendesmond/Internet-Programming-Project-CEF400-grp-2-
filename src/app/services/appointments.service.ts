import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../Interfaces/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  public  _url = '/assets/data/appointment.json';
  constructor(public http: HttpClient) { }


  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this._url);
  }
}
