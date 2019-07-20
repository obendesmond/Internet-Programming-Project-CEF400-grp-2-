import { Component, OnInit } from '@angular/core';
import { DoctorListing } from '../Interfaces/doctor-listing';
import { DoctorListingService } from '../services/doctor-listing.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {

  public doctors = [];
  constructor(private _doctorListingService: DoctorListingService) { }

  ngOnInit() {

    this._doctorListingService.getAllDoctors()
        .subscribe(data => this.doctors = data);
  }

}
