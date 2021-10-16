import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookedCovidTest } from 'src/app/models/BookedCovidTest';
import { IndividualBookingInformation } from 'src/app/models/IndividualBookingInformation';

const apiUrl = `${environment.BASE_URL}${environment.Individual_API}`;
let httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json; charset=utf-8"
  })
}


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  submitBookedCovidTest(request: any): Observable<BookedCovidTest>  {
    console.log(apiUrl);
    return this.http.post<BookedCovidTest>(`${apiUrl}${"/BookCovidTest"}`,request, httpOptions).pipe();
  }

  GetIndividualInfoByMobileNoAndEmail(emailAddress: string, mobileNumber: string): Observable<IndividualBookingInformation>  {
    console.log(apiUrl);
    return this.http.get<IndividualBookingInformation>(`${apiUrl}${"/getIndividualInfoByMobileNoAndEmail?emailAddress="}
                ${emailAddress}${"&mobileNumber="}${mobileNumber}`, httpOptions).pipe();
  }
}
