import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualRoutingModule } from './individual.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndividualComponent } from './container/individual.component';



@NgModule({
  declarations: [IndividualComponent],
  imports: [
    CommonModule,
    IndividualRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class IndividualModule { }
