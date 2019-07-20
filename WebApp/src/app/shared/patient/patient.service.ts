import { Patient } from './patient.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  aPatient: Patient = {
    name: '',
    email: '',
    tel: '',
    password: ''
  };

  constructor() { }
}
