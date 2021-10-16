import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SetTestOutcome } from 'src/app/models/SetTestOutcome';
import { SetTestOutcomeRequest } from 'src/app/models/SetTestOutcomeRequest';
import { environment } from 'src/environments/environment';

const apiUrl = `${environment.BASE_URL}${environment.IndividualLabs_API}`;
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json; charset=utf-8"
  })
}

@Injectable({
  providedIn: 'root'
})
export class IndividualLabsService {

  constructor(private http: HttpClient) { }

  setTestOutCome(testOutCome: SetTestOutcomeRequest): Observable<SetTestOutcome>  {
    console.log(apiUrl);
    return this.http.put<any>(`${apiUrl}${"/SetTestOutcome"}`, testOutCome, httpOptions).pipe();
  }
}
