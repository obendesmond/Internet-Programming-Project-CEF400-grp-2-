import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../shared/doctor/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
  providers: [DoctorService]
})
export class DoctorListComponent implements OnInit {

  doctors: any;

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorService.listDoctors().subscribe(
      data => {
        this.doctors = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
