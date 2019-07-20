import { Doctor } from './doctor.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  aDoctor: Doctor = {
    name: '',
    email: '',
    tel: '',
    consultation_fee: 0,
    location: '',
    pic_url: '',
    password: '',
    biography: ''
  };
  constructor() { }
}
