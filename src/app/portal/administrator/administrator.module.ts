import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorComponent } from './container/administrator.component';
import { AdministratorRoutingModule } from './administrator.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdministratorComponent],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AdministratorComponent
  ]
})
export class AdministratorModule { }
