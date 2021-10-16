import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BookingsReport } from 'src/app/models/BookingsReport';
import { AdministratorService } from 'src/app/services/administrator-service/administrator.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  
  form: FormGroup;
  showLoader: boolean;
  bookingReports$:Observable<any>;
  constructor(private administratorService: AdministratorService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      bookingEndDates: new FormControl('', [Validators.required]),
      bookingStartDates: new FormControl('', [Validators.required])
      
    });
  }

  get bookingEndDates() {
    return this.form.get('bookingEndDates');
  }

  get bookingStartDates() {
    return this.form.get('bookingStartDates');
  }

  showLoaders(){
    this.showLoader = true
  }

  disableLoaders(){
    this.showLoader = false
  }


  submitForm(){
    this.form.markAllAsTouched();
    this.showLoaders();

    this.bookingReports$ = this.administratorService.GetBookingsReports(this.form.value.bookingStartDates, 
                      this.form.value.bookingEndDates, "1", "60");
                      this.bookingReports$.subscribe(res => console.log(res))
                      
    this.disableLoaders(); 
                  
  }

  viewIndividualData(bookingReport: BookingsReport){
    console.log(bookingReport)
  }
}
