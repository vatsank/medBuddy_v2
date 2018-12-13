import { Transaction } from './../transaction';
import { MedBuddyAPIService } from './../med-buddy-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-txn-history',
  templateUrl: './txn-history.component.html',
  styleUrls: ['./txn-history.component.css']
})
export class TxnHistoryComponent implements OnInit {
  srchString = '';
  constructor(private service: MedBuddyAPIService) { }
  txnList: Transaction[];
  ngOnInit() {

    this.service.findAllTransactions().then(
      resp => this.txnList = resp
    );
  }

}
