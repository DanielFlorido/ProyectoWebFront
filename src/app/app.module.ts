import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoListComponent } from './vehiculo/vehiculo-list/vehiculo-list.component';
import { VehiculoViewComponent } from './vehiculo/vehiculo-view/vehiculo-view.component';
import { VehiculoRetirarComponent } from './vehiculo/vehiculo-retirar/vehiculo-retirar.component';
import { VehiculoCrearComponent } from './vehiculo/vehiculo-crear/vehiculo-crear/vehiculo-crear.component';
import { PisoListComponent } from './piso/piso-list/piso-list/piso-list.component';
import { VehiculoListByPisoComponent } from './vehiculo/vehiculo-list-by-piso/vehiculo-list-by-piso/vehiculo-list-by-piso.component';
import { HeaderComponent } from './header/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    VehiculoListComponent,
    VehiculoViewComponent,
    VehiculoRetirarComponent,
    VehiculoCrearComponent,
    PisoListComponent,
    VehiculoListByPisoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
