import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';
import { Venue } from 'interfacePlace';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
@ViewChild('search') inputSearch: ElementRef;
@ViewChild('searchID') inputSearchID: ElementRef;

search: string;
searchID: string;
searchedPlaces: Venue[] = [];
searchedID: Venue;

  constructor(private api: ApiService) {
    console.log('search component');
  }

  ngOnInit() {
  }

  SearchGivenInput() {
    this.search = this.inputSearch.nativeElement.value;

    this.api.searchVenue(this.search).subscribe((word => {
      this.searchedPlaces = word.response.venues;
    }));
  }
  SearchForID() {
    console.log('getbyid');
    this.searchID = this.inputSearchID.nativeElement.value;

    this.api.getByID(this.searchID).subscribe((id => {
      this.searchedID = id.response.venue;
      console.log(id.response.venue);
    }));
  }
}
