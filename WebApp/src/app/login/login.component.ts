import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import {LoginService } from '../shared/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loginModel = {
    email:'',
    password:'',
  }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;

  constructor(private loginService: LoginService,
          private router: Router) { }

  ngOnInit() {
  }

  loginUser(form: NgForm){
    this.loginService.loginClient(form.value).subscribe(
      res => {
        this.loginService.setToken(res['token']);
        this.router.navigateByUrl('/doctor-list');
      },
      err => {
        this.loginService.loginDoctor(form.value).subscribe(
          res => {
            this.loginService.setToken(res['token']);
            this.router.navigateByUrl('/doctor-list');
          },
          err => {
            this.serverErrorMessages = err.error.message;
          }
        );
      }
    );
  }

}
