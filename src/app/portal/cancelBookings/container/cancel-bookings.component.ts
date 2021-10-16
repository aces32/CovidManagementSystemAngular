import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CancelBooking } from 'src/app/models/CancelBooking';
import { CancelBookingRequest } from 'src/app/models/CancelBookingRequest';
import { IndividualBookingInformation } from 'src/app/models/IndividualBookingInformation';
import { BookingService } from 'src/app/services/booking-service/booking.service';

@Component({
  selector: 'app-cancel-bookings',
  templateUrl: './cancel-bookings.component.html',
  styleUrls: ['./cancel-bookings.component.scss']
})
export class CancelBookingsComponent implements OnInit {

  showLoader: boolean;
  disableButton: boolean = false;
  form: FormGroup;
  individualBookingInformation$:Observable<IndividualBookingInformation>; 

  constructor(private bookingService: BookingService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      individualEmailAddress: new FormControl('', [Validators.required, Validators.email]),
      individualMobileNumber: new FormControl('', [Validators.required]),     
    });
  }

  get individualEmailAddress() {
    return this.form.get('individualEmailAddress');
  }

  get individualMobileNumber() {
    return this.form.get('individualMobileNumber');
  }

  showLoaders(): void{
    this.showLoader = true
    this.disableButton = true
  }

  disableLoaders(): void{
    this.showLoader = false
    this.disableButton = false;
  }

  submitForm(): void{
    if(this.form.invalid){
      return this.form.markAllAsTouched();
    }

    this.showLoaders();

    this.individualBookingInformation$ = this.bookingService.GetIndividualInfoByMobileNoAndEmail(
                      this.form.value.individualEmailAddress, this.form.value.individualMobileNumber)
    this.disableLoaders(); 
  }

  
  goBacktoForm(): void{
    this.individualBookingInformation$ = null;
    this.form.reset();
  }

  setTestOutcome = (individualEmailAddress: string, individualMobileNumber: string): void => {
    console.log({individualEmailAddress, individualMobileNumber})

    const setTestOutcomeRequest: CancelBookingRequest = {
      individualEmailAddress: individualEmailAddress,
      individualMobileNumber: individualMobileNumber,
      individualBookingStatus: false
    }

    this.bookingService.cancelBookings(setTestOutcomeRequest).subscribe((res: CancelBooking) =>{
      this.form.reset();
      this.individualBookingInformation$ = null;
      this.toastr.success("booking has been canceled")
    },

    (error) => {
      error.error.forEach(element => {
        console.log(element);
        this.toastr.error(element)
      });
    })
  
  }
}
