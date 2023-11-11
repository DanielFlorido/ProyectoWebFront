import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { VehiculoViewComponent } from './vehiculo/vehiculo-view/vehiculo-view.component';
import { VehiculoListComponent } from './vehiculo/vehiculo-list/vehiculo-list.component';
import { VehiculoRetirarComponent } from './vehiculo/vehiculo-retirar/vehiculo-retirar.component';

const routes: Routes = [
  {path: 'gestionParqueadero/buscarVehiculo/:id', component: VehiculoViewComponent},
  {path: 'gestionParqueadero/list', component: VehiculoListComponent},
  {path: 'gestionParqueadero/retirarVehiculo/:id', component: VehiculoRetirarComponent},
  { path: '', pathMatch: 'full', redirectTo: '/gestionParqueadero/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  providers: [provideRouter(routes,withComponentInputBinding())]
})
export class AppRoutingModule { }
