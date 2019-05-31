import { Component, OnInit, Input, ViewChild, ElementRef  } from '@angular/core';
import { ApiService } from '../api.service';
import { IMaterials } from 'interfacePlace';

@Component({
  selector: 'app-circusmaterials',
  templateUrl: './circusmaterials.component.html',
  styleUrls: ['./circusmaterials.component.scss']
})
export class CircusmaterialsComponent implements OnInit {
  materials: IMaterials;
  search: string;
  materialSearched: IMaterials;
  materialpost: IMaterials;
 @ViewChild('search') inputSearch: ElementRef;

  constructor(private api: ApiService) {
    console.log('circusmaterial component');
  }

  ngOnInit() {
    this.api.getCircusMaterials().subscribe( material => {
      this.materials = material;
      console.log(this.materials);
  });
  }
  searchMaterial() {
    this.search = this.inputSearch.nativeElement.value;
    this.api.searchMaterial(Number(this.search)).subscribe(material => {
      this.materialSearched = material;
    });
  }
  deleteMaterial() {
    this.search = this.inputSearch.nativeElement.value;
    console.log(this.search);
    this.api.deleteMaterial(Number(this.search)).subscribe(material => {
      return console.log('material deleted');
    });
  }

  postMaterial() {
    this.materialpost = {
      name: 'jonas',
      amount: 1,
      brand: 'jonas',
      categorie: 'human',
      in_use_date: new Date('15061999')
    };
    this.api.postCircusMaterial(this.materialpost).subscribe(material => {
      console.log(material);
    });
    console.log('added to api');
  }
}
