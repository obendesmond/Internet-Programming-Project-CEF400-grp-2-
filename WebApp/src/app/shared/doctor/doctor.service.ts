import { Doctor } from './doctor.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

// import environment base a
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  aDoctor: Doctor = {
    name: '',
    email: '',
    tel: '',
    specialty: '',
    consultation_fee: 0,
    location: '',
    password: '',
    biography: ''
  };
  constructor(private http: HttpClient) { }

  postDoctor(doctor: Doctor){
    return this.http.post(environment.apiBaseUrlDoctors+'/register',doctor);
  }
}
