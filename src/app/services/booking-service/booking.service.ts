import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookedCovidTest } from 'src/app/models/BookedCovidTest';
import { IndividualBookingInformation } from 'src/app/models/IndividualBookingInformation';
import { map } from 'rxjs/operators';
import { CancelBookingRequest } from 'src/app/models/CancelBookingRequest';
import { CancelBooking } from 'src/app/models/CancelBooking';

const apiUrl = `${environment.BASE_URL}${environment.Individual_API}`;
const httpOptions = {
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
                ${emailAddress}${"&mobileNumber="}${mobileNumber}`, httpOptions).pipe(
                );
  }

  cancelBookings(cancelBookingRequest: CancelBookingRequest): Observable<CancelBooking>  {
    console.log(apiUrl);
    return this.http.put<any>(`${apiUrl}${"/CancelBookedTest"}`, cancelBookingRequest, httpOptions).pipe();
  }
}
