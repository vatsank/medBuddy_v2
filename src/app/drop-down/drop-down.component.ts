import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  @Input() data: string[];
  @Input() fieldName: string;

  constructor() { }

  ngOnInit() {
  }

}
