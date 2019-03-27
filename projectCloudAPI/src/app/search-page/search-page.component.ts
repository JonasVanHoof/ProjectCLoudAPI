import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';
import { Venue } from 'interfacePlace';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
@ViewChild('search') inputSearch :ElementRef;

search :string;
searchedPlaces :Venue[] = [];

  constructor(private api :ApiService) {
    console.log("search component");
  }

  ngOnInit() {
  }

  SearchGivenInput(){
    this.search = this.inputSearch.nativeElement.value;

    this.api.searchVenue(this.search).subscribe((word => {
      this.searchedPlaces = word.response.venues;;
    }));;
  }

}
