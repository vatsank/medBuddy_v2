import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  @Input() dataList: Object[];
  headers: string[];
  constructor() { }

  ngOnInit() {
    this.headers = Object.keys(this.dataList[0]);
  }

}
