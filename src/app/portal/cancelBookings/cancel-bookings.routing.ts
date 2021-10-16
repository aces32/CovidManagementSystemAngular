import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CancelBookingsComponent } from './container/cancel-bookings.component';

const routes: Routes = [
  {
    path: '',
    component: CancelBookingsComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CancelBookingsRoutingModule { }
