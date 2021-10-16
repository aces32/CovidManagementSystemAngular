import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AdministratorService } from 'src/app/services/administrator-service/administrator.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  
  form: FormGroup;
  showLoader: boolean;
  bookingReport$:Observable<any>;
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
    console.log(JSON.stringify(this.form.value))
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }
    this.showLoaders();

    this.bookingReport$ = this.administratorService.GetBookingsReports(this.form.value.bookingStartDates, 
                      this.form.value.bookingEndDates, "1", "60");
                      this.bookingReport$.subscribe(res => console.log(res))
  }
}
