import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndividualLabsComponent } from './container/individual-labs.component';

const routes: Routes = [
  {
    path: '',
    component: IndividualLabsComponent,
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
export class IndividualLabsRoutingModule { }
