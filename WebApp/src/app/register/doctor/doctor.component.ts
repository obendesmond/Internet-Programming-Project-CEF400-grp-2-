import { Component, OnInit } from '@angular/core';
import { DoctorService } from './../../shared/doctor/doctor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
  providers: [DoctorService]
})
export class DoctorComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSuccessMessage: boolean = false;
  serverErrorMessages:string;

  constructor(public doctorService: DoctorService) { }

  ngOnInit() {
  }

  registerDoctor(form: NgForm){
    this.doctorService.postDoctor(form.value).subscribe(
      res => {
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
    this.doctorService.aDoctor = {
      name: '',
      email: '',
      tel: '',
      specialty: '',
      consultation_fee:0,
      location:'',
      password: '',
      biography:''
    }
    form.resetForm();
    this.serverErrorMessages = '';
  }
}
