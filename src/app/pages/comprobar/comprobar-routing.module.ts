import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprobarComponent } from './comprobar.component';

const routes: Routes = [{ path: '', component: ComprobarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprobarRoutingModule { }
