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
}
