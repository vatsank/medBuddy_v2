import { FeedBackComponent } from './../feed-back/feed-back.component';
import { MedBuddyAPIService } from './../med-buddy-api.service';
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Hospital } from '../hospital';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {

  @ViewChild(FeedBackComponent) feedBack: FeedBackComponent;

  hospitalList: Hospital[];
  reviews: string[];
  ratings: string[];
  constructor(private service: MedBuddyAPIService, private detector: ChangeDetectorRef) {
      }

  ngOnInit() {

    this.service.findAllHospitals().subscribe(data => this.hospitalList = data);
  }

  ngAfterViewInit(): void {

    this.reviews = this.feedBack.getBestReviews();
    this.ratings = this.feedBack.getLatestReviews();
      this.detector.detectChanges();

  }

}
