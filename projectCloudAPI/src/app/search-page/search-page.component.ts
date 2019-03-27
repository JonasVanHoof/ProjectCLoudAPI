import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

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

  constructor() {
    console.log('Search component');
  }

  ngOnInit() {
  }

  SearchGivenInput(){
    this.city = this.inputCity.nativeElement.value;
    this.categorie = this.inputCategorie.nativeElement.value;
    this.maxDistance = this.inputMaxDistance.nativeElement.value;
    console.log(this.city);
    console.log(this.categorie);
    console.log(this.maxDistance);
  }

}
