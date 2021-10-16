import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { retry} from 'rxjs/operators';
import { Observable } from 'rxjs';


const apiUrl = `${environment.BASE_URL}${environment.Location_API}`;
let httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json; charset=utf-8"
  })
}

@Injectable({
  providedIn: 'root'
})

export class LocationService {

  constructor(private http: HttpClient)  { }

  getLocationData() : Observable<Location> {
    console.log(apiUrl);
    return this.http.get<Location>(apiUrl, httpOptions).pipe(retry(2));
  }
}

