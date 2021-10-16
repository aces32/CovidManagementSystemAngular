import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './container/portal.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      {
        path: '',
        redirectTo: 'administrator',
        pathMatch: 'full'

      },
      {
        path: 'administrator',
        loadChildren: () => import('./administrator/administrator.module').then(m => m.AdministratorModule)
      },
      {
        path: 'individuals',
        loadChildren: () => import('./individuals/individual.module').then(m => m.IndividualModule)
      },
      {
        path: 'individualLabs',
        loadChildren: () => import('./individualLabs/individual-labs.module').then(m => m.IndividualLabsModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
