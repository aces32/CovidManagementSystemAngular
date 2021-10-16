import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Administrator } from 'src/app/models/Administrator';
import { AllocateBookingSpaceRequest } from 'src/app/models/AllocateBookingSpaceRequest';
import { AdministratorService } from 'src/app/services/administrator-service/administrator.service';
import { LocationService } from 'src/app/services/location-service/location.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {

  showLoader: boolean;
  disableButton: boolean = false;
  locations$:Observable<Location>;  
  locationModelData = [''];
  locationData = [];
  form: FormGroup;

  constructor(private locationService: LocationService,
    private administratorService: AdministratorService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      location: new FormControl('', [Validators.required]),
      capacity: new FormControl('', [Validators.required]),
      bookingDates: new FormControl('', [Validators.required])
    });
    this.getLocation();
  }

  get location() {
    return this.form.get('location');
  }

  get capacity() {
    return this.form.get('capacity');
  }

  get bookingDates() {
    return this.form.get('bookingDates');
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
    this.form.markAllAsTouched();
    
    this.showLoaders();

    const allocateBookingSpaceRequest: AllocateBookingSpaceRequest = {
      capacity: this.form.value.capacity,
      bookingDates: this.form.value.bookingDates,
      locationID: this.form.value.location
    }

    this.administratorService.submitAllocatedBookingSpace(allocateBookingSpaceRequest).subscribe((res: Administrator) =>{
      this.form.reset();
      this.toastr.success("Space booked successfuly for the specified date")
      this.disableLoaders()
    },
    (error) => {
      this.disableLoaders()
      error.error.forEach(element => {
        console.log(element);
        this.toastr.error(element)
      });

    })

  }

}
