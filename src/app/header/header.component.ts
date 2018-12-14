import { Component, OnInit } from '@angular/core';
import { Link } from '../link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo: string;
  links: Link[];
  constructor() {
    this.logo = 'assets/images/logo.jpg';
    this.links = [
      {linkRef: 'home', linkText: 'Home'},
      {linkRef: 'history', linkText: 'My Transactions'},
      {linkRef: 'medicine', linkText: 'Medicine'},
      {linkRef: 'hospital', linkText: 'Hospital'},
      {linkRef: 'doctors', linkText: 'Doctors'},
      {linkRef: 'chekup', linkText: 'Health Checkup'}



    ];
  }



  ngOnInit() {
  }

}
