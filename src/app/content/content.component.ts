import { MedBuddyAPIService } from './../med-buddy-api.service';
import { Component, OnInit } from '@angular/core';
import { Hospital } from '../hospital';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  hospitalList: Hospital[];
  constructor(private service: MedBuddyAPIService) {
      }

  ngOnInit() {

    this.service.findAllHospitals().subscribe(data => this.hospitalList = data);
  }

}
