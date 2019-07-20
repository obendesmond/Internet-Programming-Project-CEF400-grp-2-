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

  listDoctors(){
    return this.http.get(environment.apiBaseUrlDoctors+'/');
  }

  // updateProfile(doctor: Doctor,id){
  //   return this.http.put(environment.apiBaseUrlDoctors+'/updateProfile/'+id,doctor);
  // }

  // deleteDoctor(id){
  //   return this.http.delete(environment.apiBaseUrlDoctors+'/delete/'+id);
  // }

}
