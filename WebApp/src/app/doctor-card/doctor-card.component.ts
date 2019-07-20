import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../interfaces/doctor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss']
})


export class DoctorCardComponent implements OnInit {


  @Input() doctorList: Doctor;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(doctorList){
    console.log('switching...');
    this.router.navigate(['/doctor-detail', doctorList.id]);
  }

}
