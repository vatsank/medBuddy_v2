import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-get-stock-status',
  templateUrl: './get-stock-status.component.html',
  styleUrls: ['./get-stock-status.component.css']
})
export class GetStockStatusComponent implements OnInit {

  @Input() srchMedicine: string;
  @Output() status: EventEmitter<string> = new EventEmitter();
  stock: Map<string, number>;
  constructor() {
    this.stock = new Map();
    this.stock.set('crocin', 50);
    this.stock.set('bcomplex', 60);
   }

  ngOnInit() {
  }

  sendStatus() {

      const  stock = this.stock.get(this.srchMedicine);

      if (stock !== undefined) {
      this.status.emit(stock.toString());
      } else {
        this.status.emit('Item Not available');
      }
  }
}
