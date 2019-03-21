import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-places-page',
  templateUrl: './places-page.component.html',
  styleUrls: ['./places-page.component.sass']
})
export class PlacesPageComponent implements OnInit {
places :string[] = [];

  constructor(private api: ApiService) {
    this.api.getplaces().subscribe((results => {
      console.log(results);
    }));
  }

  ngOnInit() {}

}
