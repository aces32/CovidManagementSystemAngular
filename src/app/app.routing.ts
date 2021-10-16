import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'portal',
    pathMatch: 'full',
  },
  {
    path: 'portal',
    loadChildren: () =>
      import('./portal/portal.module').then((m) => m.PortalModule),
  },
  {
    path: '**',
    redirectTo: 'portal',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
