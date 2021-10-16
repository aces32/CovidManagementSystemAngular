import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualLabsRoutingModule } from './individual-labs.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndividualLabsComponent } from './container/individual-labs.component';



@NgModule({
  declarations: [IndividualLabsComponent],
  imports: [
    CommonModule,
    IndividualLabsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    IndividualLabsComponent
  ]
})
export class IndividualLabsModule { }
