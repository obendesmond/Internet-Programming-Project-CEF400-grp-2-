import { Component, OnInit, Input } from '@angular/core';
import { DoctorListingService } from '../services/doctor-listing.service';
import { DoctorListing } from '../Interfaces/doctor-listing';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss']
})
export class DoctorCardComponent implements OnInit {


  @Input() doc: DoctorListing;
  constructor() { }

  ngOnInit() {

  }

}
