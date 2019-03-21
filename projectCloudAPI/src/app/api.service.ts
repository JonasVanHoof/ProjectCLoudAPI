import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'interfacePlace';
import { Keys } from './keys';
import { RootObject } from 'interfacePlace';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
longtitude :number = 51.13;
latitude :number = 4.25;
keys :Keys;
client_id : string;
client_secret :string;

  constructor( private http: HttpClient) {
    this.keys = new Keys();
    this.client_id = this.keys.client_id;
    this.client_secret = this.keys.client_secret;
  }

  getplaces(){
    return this.http.get<RootObject>("http://api.foursquare.com/v2/venues/search?ll=" + this.longtitude + "," + this.latitude + "&client_id="+ this.client_id +"&client_secret=" + this.client_secret +"&v=20190321");
  }
}
