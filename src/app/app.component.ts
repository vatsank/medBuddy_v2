import { Medicine } from './medicine';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medbuddy';

   medicineList: Medicine[] = [
     {code: 101, medicineName: 'crocin', type: 'assets/images/tablet.png'},
     {code: 102, medicineName: 'gelusil', type: 'assets/images/bottle.png'}
    ];
}
