import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { IndividualBookingInformation } from 'src/app/models/IndividualBookingInformation';
import { BookingService } from 'src/app/services/booking-service/booking.service';

@Component({
  selector: 'app-individual-labs',
  templateUrl: './individual-labs.component.html',
  styleUrls: ['./individual-labs.component.scss']
})
export class IndividualLabsComponent implements OnInit {

  showLoader: boolean;
  disableButton: boolean = false;
  form: FormGroup;
  individualBookingInformation$:Observable<IndividualBookingInformation>; 
  selectedOutcome: string;
  selectedOutcomes = [
    { name: "positive", value: "positive" },
    { name: "negative", value: "positve" }
  ] 

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
    console.log(JSON.stringify(this.form.value))
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }
    this.showLoaders();

    this.individualBookingInformation$ = this.bookingService.GetIndividualInfoByMobileNoAndEmail(
                      this.form.value.individualEmailAddress, this.form.value.individualMobileNumber)

                      this.individualBookingInformation$.subscribe(res => console.log(res))
    this.disableLoaders(); 
  }

  cancelTestOutcome(): void{
    this.individualBookingInformation$ = null;
    this.form.reset();
  }

  setTestOutcome = (individualLabId: number, selectedOutcome: string): void => {
    console.log({individualLabId, selectedOutcome})
  
  }
}
