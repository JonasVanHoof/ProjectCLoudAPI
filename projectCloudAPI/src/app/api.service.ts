import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'interfacePlace';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
client_id :string = "41NV1V1QCP1WNT1EGPPWTONPOWUSTBWAQC0LQE5OR0L5A1VA";
client_secret :string = "0VGNPPDOPF452YKPMSKV1TNOHTGAMTR2M1ID1USKTNESBGZA";
longtitude :number = 51.13;
latitude :number = 4.25;

  constructor( private http: HttpClient) {}

  getTrending(){
    return this.http.get("https://api.foursquare.com/v2/venues/search?ll=longtitude,latitude&client_id=client_id&client_secret=client_secret&v=20190321");
  }
}
