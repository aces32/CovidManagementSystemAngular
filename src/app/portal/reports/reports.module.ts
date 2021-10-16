import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportsComponent } from './container/reports.component';



@NgModule({
  declarations: [ReportsComponent],
  imports: [
    ReportsRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReportsModule { }
