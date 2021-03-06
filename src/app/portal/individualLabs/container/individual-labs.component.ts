import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { IndividualBookingInformation } from 'src/app/models/IndividualBookingInformation';
import { SetTestOutcome } from 'src/app/models/SetTestOutcome';
import { SetTestOutcomeRequest } from 'src/app/models/SetTestOutcomeRequest';
import { BookingService } from 'src/app/services/booking-service/booking.service';
import { IndividualLabsService } from 'src/app/services/individualLabs-Service/individual-labs.service';

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
    private toastr: ToastrService, private individualLabsService: IndividualLabsService) { }

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

  cancelTestOutcome(): void{
    this.individualBookingInformation$ = null;
    this.form.reset();
  }

  setTestOutcome = (individualLabId: number, selectedOutcome: string): void => {
    console.log({individualLabId, selectedOutcome})

    const setTestOutcomeRequest: SetTestOutcomeRequest = {
      individualLabId: individualLabId,
      testOutCome: selectedOutcome,
      testCompleted: true
    }

    this.individualLabsService.setTestOutCome(setTestOutcomeRequest).subscribe((res: SetTestOutcome) =>{
      this.form.reset();
      this.individualBookingInformation$ = null;
      this.toastr.success("Test outcome has successfully been set")
    },

    (error) => {
      error.error.forEach(element => {
        console.log(element);
        this.toastr.error(element)
      });
    })
  
  }
}
