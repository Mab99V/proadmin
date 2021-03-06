import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'consultas', loadChildren: () => import('./pages/consultas/consultas.module').then(m => m.ConsultasModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'comprobar', loadChildren: () => import('./pages/comprobar/comprobar.module').then(m => m.ComprobarModule) },
  { path: 'datos', loadChildren: () => import('./pages/datos/datos.module').then(m => m.DatosModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
