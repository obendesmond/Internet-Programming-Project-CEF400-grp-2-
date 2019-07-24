import { PatientService } from './../../shared/patient/patient.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  providers: [PatientService]
})
export class ClientComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSuccessMessage: boolean = false;
  serverErrorMessages:string;

  constructor(public clientService: PatientService) { }

  ngOnInit() {
  }

  registerClient(form: NgForm){
    this.clientService.postClient(form.value).subscribe(
      res =>{
        this.showSuccessMessage = true;
        setTimeout(() => {this.showSuccessMessage=false}, 4000);
        this.reset_form(form);
      },
      err =>{
        if(err.status == 422){
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else{
          this.serverErrorMessages = 'Something went wrong, plese contact the admin and check your connection';
        }
      }
    );
  }

  reset_form(form: NgForm){
    // reset model
    this.clientService.aClient = {
      name: '',
      email: '',
      tel: '',
      password: ''
    }
    form.resetForm();
    this.serverErrorMessages = '';
  }
}
