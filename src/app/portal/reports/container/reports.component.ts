import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { BookingsReport, Individual } from 'src/app/models/BookingsReport';
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
  bookingReportsData:Individual[];
  closeModal: string;
  constructor(private administratorService: AdministratorService,
              private modalService: NgbModal) { }

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
    if(this.form.invalid){
      return this.form.markAllAsTouched();
    }
    this.showLoaders();

    this.bookingReports$ = this.administratorService.GetBookingsReports(this.form.value.bookingStartDates, 
                      this.form.value.bookingEndDates, "1", "60");
                      this.bookingReports$.subscribe(res => console.log(res))
                      
    this.disableLoaders(); 
                  
  }

  viewIndividualData(bookingReport: BookingsReport){
    console.log(bookingReport)
  }

  triggerModal(content, bookingReport: BookingsReport) {

    this.bookingReportsData = bookingReport.individuals
    this.modalService.open(content, {centered: true,backdrop: 'static'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
