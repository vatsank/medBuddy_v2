import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  links: any;
  inc: boolean;
  reduce: boolean;
  constructor() {

    this.links = [
      {linkText: 'Twitter', linkCls: 'fa fa-twitter'},
      {linkText: 'Instagram', linkCls: 'fa fa-instagram'},
      {linkText: 'Facebook', linkCls: 'fa fa-facebook'}
    ];
  }

  ngOnInit() {
  }
  increse(){
  this.inc = true;
  this.reduce = false;
}
decrese(){
  this.inc = false;
  this.reduce =true;
}
}
