import { Credential } from './../classes/credential';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Interfaces/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = '/assets/data/login.json';
  private postUrl = '';
  constructor(private http: HttpClient) { }

  validateUser(): Observable<Login[]>{
    return this.http.get<Login[]>(this.url);
  }

  postLoginCredentials(credential: Credential) {

    return this.http.post(this.postUrl, credential);
  }
}
