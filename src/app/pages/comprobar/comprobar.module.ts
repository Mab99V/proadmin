import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprobarRoutingModule } from './comprobar-routing.module';
import { ComprobarComponent } from './comprobar.component';


@NgModule({
  declarations: [
    ComprobarComponent
  ],
  imports: [
    CommonModule,
    ComprobarRoutingModule
  ]
})
export class ComprobarModule { }
