import { ShowLocationComponent } from './../show-location/show-location.component';
import { ComponentAdderService } from './../component-adder.service';
import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-hospital',
  templateUrl: './search-hospital.component.html',
  styleUrls: ['./search-hospital.component.css']
})
export class SearchHospitalComponent implements OnInit {

  hospitalCategory = ['Super Speciality', 'Dental', 'Eye', 'Family Phsysician', 'Fertility','Diabties'];

  @ViewChild('locationRef', {read: ViewContainerRef})  viewRef: ViewContainerRef;
  city = '';
  constructor(private service: ComponentAdderService) { }

  ngOnInit() {
  }

  show() {

     this.service.setViewRef(this.viewRef);
     this.service.addComponent(ShowLocationComponent);
     this.service.selectedPlace.subscribe(value => {
       console.log(value);
       this.city = value;
       if( value !== ''){
        this.service.removeComponent();
       }
      });
  }


}
