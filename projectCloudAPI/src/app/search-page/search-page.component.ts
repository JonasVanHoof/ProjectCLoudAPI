import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';
import { Venue } from 'interfacePlace';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
@ViewChild('city') inputCity :ElementRef;
@ViewChild('categorie') inputCategorie :ElementRef;
@ViewChild('maxDistance') inputMaxDistance :ElementRef;

city :string;
categorie :string;
maxDistance :number;
searchedPlaces :Venue[] = [];

  constructor(private api :ApiService) {

  }

  ngOnInit() {
  }

  SearchGivenInput(){
    this.city = this.inputCity.nativeElement.value;
    this.categorie = this.inputCategorie.nativeElement.value;
    this.maxDistance = this.inputMaxDistance.nativeElement.value;

    this.api.searchVenue(this.city).subscribe((word => {
      this.searchedPlaces = word.response.venues;
    }));
    console.log(this.city);
    console.log(this.categorie);
    console.log(this.maxDistance);
  }

}
