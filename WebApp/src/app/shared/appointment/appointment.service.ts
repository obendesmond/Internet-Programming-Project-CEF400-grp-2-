// import appointment model class
import { Appointment } from './appointment.model';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  anAppointment: Appointment = {
    doctor_id: '',
    patient_id: '',
    session: ''
  };

  constructor() { }
}
