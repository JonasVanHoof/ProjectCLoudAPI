import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Venue } from 'interfacePlace';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.component.html',
  styleUrls: ['./trending-page.component.scss']
})
export class TrendingPageComponent implements OnInit {
trending :Venue[] = [];

  constructor(private api :ApiService) {
    this.api.gettrending().subscribe((trending => {
      this.trending = trending.response.venues;
      console.log("trending component");
    }));
   }

  ngOnInit() {
  }

}
