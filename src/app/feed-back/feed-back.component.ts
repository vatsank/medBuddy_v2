import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})
export class FeedBackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   getLatestReviews(): string[] {

    return ['Best and Timely Service by Doctors,Ganesh, Indian Bank ,Chennai-40',
    'Lab Test Reports Reached Our Home Before Promised time,Gaurav, Pepsi ,Mumbai-20'
  ];
   }

   getBestReviews(): string[] {

    return ['***** 5/5, maggy,pune',
    '*** 3/5, vikcy,madras'
  ];

   }
}
