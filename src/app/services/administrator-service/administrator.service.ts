import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Administrator } from 'src/app/models/Administrator';
import { AllocateBookingSpaceRequest } from 'src/app/models/AllocateBookingSpaceRequest';
import { BookingsReport } from 'src/app/models/BookingsReport';
import { environment } from 'src/environments/environment';

const apiUrl = `${environment.BASE_URL}${environment.Administrator_API}`;
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json; charset=utf-8"
  })
}

@Injectable({
  providedIn: 'root'
})

export class AdministratorService {

  constructor(private http: HttpClient) { }


  submitAllocatedBookingSpace(request: AllocateBookingSpaceRequest): Observable<Administrator>  {
    console.log(apiUrl);
    return this.http.post<any>(`${apiUrl}${"/AllocateBookingSpace"}`,request, httpOptions).pipe();
  }

  GetBookingsReports(startDate: string, endDate: string, page: string, size: string ): Observable<BookingsReport[]>  {
    console.log(apiUrl);
    return this.http.get<BookingsReport[]>(`${apiUrl}${"/GetBookingsReports?startDate="}
                ${startDate}${"&endDate="}${endDate}${"&page="}${page}${"&size="}${size}`, httpOptions).pipe();
  }


}
