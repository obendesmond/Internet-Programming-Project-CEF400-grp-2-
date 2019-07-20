import { PatientService } from './../../shared/patient/patient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  providers: [PatientService]
})
export class ClientComponent implements OnInit {

  clientModel = this.clientService.aPatient;

  constructor(public clientService: PatientService) { }

  ngOnInit() {
  }

}
