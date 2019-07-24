import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.scss']
})
export class MainscreenComponent implements OnInit {

  locations = ['Limbe', 'Buea', 'Bamenda', 'Kumba', 'Douala', 'Yaounde'];

  constructor() { }

  ngOnInit() {
  }

}
