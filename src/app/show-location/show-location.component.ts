import { ComponentAdderService } from './../component-adder.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-location',
  templateUrl: './show-location.component.html',
  styleUrls: ['./show-location.component.css']
})
export class ShowLocationComponent implements OnInit {
  city: any;

  constructor(private service: ComponentAdderService) { }

  ngOnInit() {
  }
  store(city) {
    this.city = city;
   this.service.selectedPlace.next(this.city);
  }
}
