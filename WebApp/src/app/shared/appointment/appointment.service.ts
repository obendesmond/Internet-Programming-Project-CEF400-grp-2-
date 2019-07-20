// import appointment model class
import { Appointment } from './appointment.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// include environment
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  anAppointment: Appointment = {
    doctor_id: '',
    patient_id: '',
    session: ''
  };

  constructor(private http: HttpClient) { }

  // listAppointments(){
  //   return this.http.get(environment.apiBaseUrlAppointments+'/all');
  // }

  // makeAppointment(appointment: Appointment){
  //   return this.http.post(environment.apiBaseUrlAppointments+'/add',appointment);
  // }

  // updateAppointment(appointment: Appointment,id){
  //   console.log('appointment updating...');
  //   //return this.http.post(environment.apiBaseUrlAppointments+'/update/'+id,appointment);
  // }

  // deleteAppointment(id){
  //   console.log('deleting appointment');
  //   //return this.http.delete(environment.apiBaseUrlAppointments+'/delete/'+id);
  // }
}
