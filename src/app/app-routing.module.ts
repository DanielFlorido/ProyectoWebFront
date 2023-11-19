import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { VehiculoViewComponent } from './vehiculo/vehiculo-view/vehiculo-view.component';
import { VehiculoListComponent } from './vehiculo/vehiculo-list/vehiculo-list.component';
import { VehiculoRetirarComponent } from './vehiculo/vehiculo-retirar/vehiculo-retirar.component';
import { PisoListComponent } from './piso/piso-list/piso-list/piso-list.component';
import { VehiculoListByPisoComponent } from './vehiculo/vehiculo-list-by-piso/vehiculo-list-by-piso/vehiculo-list-by-piso.component';
import { VehiculoCrearComponent } from './vehiculo/vehiculo-crear/vehiculo-crear/vehiculo-crear.component';
import { HomeComponent } from './home/home/home.component';
import { FAQComponent } from './FAQ/faq/faq.component';
import { TipoVehiculoSliderComponent } from './tipo-vehiculo/tipo-vehiculo-slider/tipo-vehiculo-slider/tipo-vehiculo-slider.component';
import { UsuarioCrearComponent } from './usuario/usuario-crear/usuario-crear/usuario-crear.component';

const routes: Routes = [
  {path: 'gestionParqueadero/buscarVehiculo/:id', component: VehiculoViewComponent},
  {path: 'gestionParqueadero/list', component: VehiculoListComponent},
  {path: 'gestionParqueadero/pisos/retirarVehiculo/:id', component: VehiculoRetirarComponent},
  {path: 'gestionParqueadero/pisos', component:PisoListComponent},
  {path: 'gestionParqueadero/pisos/vehiculos/:id', component: VehiculoListByPisoComponent},
  {path: 'gestionParqueadero/pisos/:id/nuevoVehiculo',  component: VehiculoCrearComponent},
  {path: 'gestionParqueadero/home', component: HomeComponent},
  {path: 'gestionParqueadero/tarifas', component: TipoVehiculoSliderComponent},
  {path: '', pathMatch: 'full', redirectTo: 'gestionParqueadero/home' },
  {path: 'gestionParqueadero/FAQ', component: FAQComponent},
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  providers: [provideRouter(routes,withComponentInputBinding())]
})
export class AppRoutingModule { }
