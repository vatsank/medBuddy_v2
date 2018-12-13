import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-stock',
  templateUrl: './show-stock.component.html',
  styleUrls: ['./show-stock.component.css']
})
export class ShowStockComponent implements OnInit {

  buttonStatus = true;
  medicineName = 'crocin';
  medicineList = ['crocin', 'bcomplex'];
  qty = 50;
  currentStatus: any;


  constructor() { }

  ngOnInit() {
  }
  changeStatus() {
    this.buttonStatus = false;
    if (this.medicineName !== 'crcoin') {
      this.qty = 100;
    }
  }

  update(val) {

    this.currentStatus = val;
  }
}
