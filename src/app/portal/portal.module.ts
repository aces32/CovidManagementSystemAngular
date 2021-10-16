import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalComponent } from './container/portal.component';
import { ComponentModule } from '../components/component.module';
import { PortalRoutingModule } from './portal.routing';


@NgModule({
  declarations: [
    PortalComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    ComponentModule,
    
  ]
})
export class PortalModule { }
