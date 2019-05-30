import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'interfacePlace';
import { Keys } from './keys';
import { RootObject, Venue, IMaterials, IOwners } from 'interfacePlace';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
longtitude = 51.23;
latitude = 4.41;
radius = 3000;
keys: Keys;
client_id: string;
client_secret: string;
VENUE_ID: string;
baseLink = 'http://api.foursquare.com/v2/';

  constructor( private http: HttpClient) {
    console.log('api init');
    this.keys = new Keys();
    this.client_id = this.keys.client_id;
    this.client_secret = this.keys.client_secret;
  }

  getplaces() {
    return this.http.get<RootObject>(this.baseLink + 'venues/search?ll=' + this.longtitude + ',' + this.latitude + '&client_id=' + this.client_id + '&client_secret=' + this.client_secret + '&v=20190321');
  }
  gettrending() {
    return this.http.get<(RootObject)>(this.baseLink + 'venues/trending?ll=' + this.longtitude + ',' + this.latitude + '&radius=' + this.radius + '&client_id=' + this.client_id + '&client_secret=' + this.client_secret + '&v=20190321');
  }
  searchVenue(word: string) {
    return this.http.get<RootObject>(this.baseLink + 'venues/search?&query=' + word + '&ll=' + this.longtitude + ',' + this.latitude + '&radius=99999999&client_id=' + this.client_id + '&client_secret=' + this.client_secret + '&v=20190321');
  }
  getCircusMaterials() {
    return this.http.get<IMaterials>('http://localhost:5000/api/Circus_material');
  }
  postCircusMaterial(material: IMaterials) {
    return this.http.post<IMaterials>('http://localhost:5000/api/Circus_material', material);
  }
  searchMaterial(word: string) {
    return this.http.get<IMaterials>('http://localhost:5000/api/Circus_material');
  }
  getOwners() {
    return this.http.get<IOwners>('http://localhost:5000/api/Owners');
  }
  getByID(id: string) {
    return this.http.get<RootObject>(this.baseLink + 'venues/' + id + '?&client_id=' + this.client_id + '&client_secret=' + this.client_secret + '&v=20190321');
  }
}
