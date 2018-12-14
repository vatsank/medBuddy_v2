import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
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
  info = '';
  constructor(private service: MedBuddyAPIService,
     private active: ActivatedRoute) { }
  txnList: Transaction[];
  ngOnInit() {

    this.active.params.subscribe(pathParams => {
      const id = pathParams['txnId'];
      if (id === undefined){ this.info = 'Loading' } else {
      this.info = 'Details of Id :=' + id + 'will be loaded';
      }
    });

    this.service.findAllTransactions().then(
      resp => this.txnList = resp
    );
  }

}
