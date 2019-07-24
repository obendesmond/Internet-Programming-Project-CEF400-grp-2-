import { Patient } from './patient.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import environment file
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  aClient: Patient = {
    name: '',
    email: '',
    tel: '',
    password: ''
  };

  constructor(private http: HttpClient) { }

  // post client to nodejsapi
  postClient(client: Patient){
    return this.http.post(environment.apiBaseUrlClients+'/register',client);
  }

  // getAllClients(){
  //   return this.http.get(environment.apiBaseUrlClients+'/');
  // }

  // loginClient(email,password){
  //   return this.http.post(environment.apiBaseUrlClients+'/login',email,password);
  // }

  // updateProfile(client: Patient, id){
  //   return this.http.put(environment.apiBaseUrlClients+'/updateProfile/'+id, client);
  // }

  // deleteClient(id){
  //   return this.http.delete(environment.apiBaseUrlClients+'/delete/'+id);
  // }

}
