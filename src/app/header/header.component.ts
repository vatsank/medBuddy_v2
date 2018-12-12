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
      {linkRef: 'Home', linkText: 'Home'},
      {linkRef: 'History', linkText: 'My Transactions'},
      {linkRef: 'Medicine', linkText: 'Medcine'},
      {linkRef: 'Locate', linkText: 'Locate Us'}


    ];
  }

  ngOnInit() {
  }

}
