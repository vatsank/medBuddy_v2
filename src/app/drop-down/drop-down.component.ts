import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  @Input() data: string[];
  @Input() fieldName: string;
  selctedOption = '';
  @Output() option: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

   selected(){
     console.log(this.selctedOption);
     this.option.emit(this.selctedOption);
   }
}
