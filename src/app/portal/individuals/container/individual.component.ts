import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { BookCovidTestRequest } from 'src/app/models/BookCovidTestRequest';
import { BookedCovidTest } from 'src/app/models/BookedCovidTest';
import { BookingService } from 'src/app/services/booking-service/booking.service';
import { LocationService } from 'src/app/services/location-service/location.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {

  showLoader: boolean;
  disableButton: boolean = false;
  locations$:Observable<Location>;  
  locationModelData = [''];
  locationData = [];
  form: FormGroup;
  constructor(private locationService: LocationService,
              private bookingService: BookingService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      location: new FormControl('', [Validators.required]),
      individualFirstName: new FormControl('', [Validators.required]),
      individualLastName: new FormControl('', [Validators.required]),
      individualEmailAddress: new FormControl('', [Validators.required, Validators.email]),
      individualMobileNumber: new FormControl('', [Validators.required]),
      bookingDates: new FormControl('', [Validators.required]),
      testType: new FormControl('', [Validators.required])
      
    });
    this.getLocation();
  }

  get location() {
    return this.form.get('location');
  }

  get individualFirstName() {
    return this.form.get('individualFirstName');
  }

  get individualLastName() {
    return this.form.get('individualLastName');
  }

  get individualEmailAddress() {
    return this.form.get('individualEmailAddress');
  }

  get individualMobileNumber() {
    return this.form.get('individualMobileNumber');
  }

  get bookingDates() {
    return this.form.get('bookingDates');
  }

  get testType() {
    return this.form.get('testType');
  }

  getLocation(){
    this.locations$ = this.locationService.getLocationData();
  }

  showLoaders(){
    this.showLoader = true
    this.disableButton = true
  }

  disableLoaders(){
    this.showLoader = false
    this.disableButton = false;
  }

  submitForm(){

    if(this.form.invalid){
      return this.form.markAllAsTouched();
    }

    this.showLoaders();

    const bookCovidTestRequest: BookCovidTestRequest = {
      individualEmailAddress: this.form.value.individualEmailAddress,
      individualFirstName: this.form.value.individualFirstName,
      individualLastName: this.form.value.individualLastName,
      individualMobileNumber: this.form.value.individualMobileNumber,
      locationID: this.form.value.location,
      bookingDate: this.form.value.bookingDates,
      individualLab: {
        testType: this.form.value.testType
      }
    }

    this.bookingService.submitBookedCovidTest(bookCovidTestRequest).subscribe((res: BookedCovidTest) =>{
      console.log(res);
      this.form.reset();
      this.toastr.success("Your covid test has successfully been booked")
      this.disableLoaders()
    },

    (error) => {
      error.error.forEach(element => {
        console.log(element);
        this.toastr.error(element)
      });
      this.disableLoaders()
    })
  }

}
