import { Component, OnInit, Input, ViewChild, ElementRef  } from '@angular/core';
import { ApiService } from '../api.service';
import { IMaterials } from 'interfacePlace';

@Component({
  selector: 'app-circusmaterials',
  templateUrl: './circusmaterials.component.html',
  styleUrls: ['./circusmaterials.component.scss']
})
export class CircusmaterialsComponent implements OnInit {
  materials : IMaterials;
  search : string;
  materialSearched : any;
 @ViewChild("search") inputSearch : ElementRef;

  constructor(private api : ApiService) {
    console.log("circusmaterial component");
    this.api.getCircusMaterials().subscribe( material => {
        this.materials = material;
        console.log(this.materials);
    });
  }

  ngOnInit() {
  }
  searchMaterial(){
    this.search = this.inputSearch.nativeElement.value;
    this.api.searchMaterial(this.search).subscribe(material => {
      this.materialSearched = material.name;
    });
  }
}
