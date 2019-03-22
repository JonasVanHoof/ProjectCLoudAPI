import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import * as _ from 'lodash';
import { Venue } from 'interfacePlace';

@Component({
  selector: 'app-places-page',
  templateUrl: './places-page.component.html',
  styleUrls: ['./places-page.component.scss']
})
export class PlacesPageComponent implements OnInit {
places :Venue[] = [];
addresses :string[] = [];

  constructor(private api: ApiService) {
    this.api.getplaces().subscribe((results => {
      console.log(results);
      this.places = results.response.venues;
      for(let i = 0; i < this.places.length; i++)
      this.addresses.push(this.places[i].location.address);
        console.log(this.addresses);
    }));
  }


  ngOnInit() {}

}
