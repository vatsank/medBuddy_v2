import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { ComponentAdderService } from '../component-adder.service';
import { ShowLocationComponent } from '../show-location/show-location.component';

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.css']
})
export class HealthCheckComponent implements OnInit {

  category: string[] = ['Master', 'Diabetes', 'Cardiac', 'Cancer'];


  checkup = {
    city: '',
    package: ''
  }
  @ViewChild('locationRef', {read: ViewContainerRef})  viewRef: ViewContainerRef;

  constructor(private service: ComponentAdderService) { }

  ngOnInit() {
  }

  submit(frmData) {

     console.log(this.checkup);
  }

  onSelection(val) {

    this.checkup.package = val;
  }
  showLocation() {

    this.service.setViewRef(this.viewRef);
    this.service.addComponent(ShowLocationComponent);
    this.service.selectedPlace.subscribe(value => {

      this.checkup.city = value;
      if ( value !== '' ){
       this.service.removeComponent();
      }
     });
  }
}
