import { Credential } from './../classes/credential';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username = 'a';
  public Message = [];
  public errormessage = '';

   userCredentials = new Credential('', ' ');
  constructor(private _snackbar: MatSnackBar,
              private _loginService: LoginService) { }

  ngOnInit() {

    this._loginService.validateUser()
        .subscribe(data => this.Message = data);
  }

  openValidationSnackbar() {
   console.log(this.Message[0].message);
   if (this.Message[0].message === null) {
    this._snackbar.open('invalid username/password', 'OK', {
      duration: 2000,
      horizontalPosition: 'center',
      panelClass: ['.error']
    } );
  }
  }

  onSubmit(){
    this._loginService.postLoginCredentials(this.userCredentials)
        .subscribe(data => console.log('successful'),
                   error => console.log('error occurred'));
  }


}
