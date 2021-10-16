import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './container/administrator.component';

const routes: Routes = [
  {
    path: '',
    component: AdministratorComponent,
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
export class AdministratorRoutingModule { }
