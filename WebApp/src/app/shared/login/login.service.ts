import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginClient(authCredentials){
    return this.http.post(environment.apiBaseUrlClients+'/login',authCredentials);
  }
  loginDoctor(authCredentials){
    return this.http.post(environment.apiBaseUrlDoctors+'/login',authCredentials);
  }

  setToken(token:string){
    localStorage.setItem('token',token);
  }
}
