import { AppointmentsService } from './../services/appointments.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  constructor(private _appointmentService: AppointmentsService) {  }

  public appointmentList = [];
  ngOnInit() {
    this._appointmentService.getAllAppointments()
        .subscribe(data => this.appointmentList = data );
  }

}
