import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportsComponent } from './container/reports.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ReportsComponent],
  imports: [
    ReportsRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class ReportsModule { }
