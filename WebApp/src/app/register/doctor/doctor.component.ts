import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/shared/doctor/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
  providers: [DoctorService]
})
export class DoctorComponent implements OnInit {

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
  }

}
