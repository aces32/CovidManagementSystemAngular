import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelBookingsComponent } from './container/cancel-bookings.component';
import { CancelBookingsRoutingModule } from './cancel-bookings.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CancelBookingsComponent],
  imports: [
    CommonModule,
    CancelBookingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CancelBookingsComponent
  ]
})
export class CancelBookingsModule { }
