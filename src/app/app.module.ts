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
import { FormsModule } from '@angular/forms';
import { UsuarioCrearComponent } from './usuario/usuario-crear/usuario-crear/usuario-crear.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { FAQComponent } from './FAQ/faq/faq.component';
import { TipoVehiculoSliderComponent } from './tipo-vehiculo/tipo-vehiculo-slider/tipo-vehiculo-slider/tipo-vehiculo-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    VehiculoListComponent,
    VehiculoViewComponent,
    VehiculoRetirarComponent,
    VehiculoCrearComponent,
    PisoListComponent,
    VehiculoListByPisoComponent,
    HeaderComponent,
    UsuarioCrearComponent,
    FooterComponent,
    HomeComponent,
    FAQComponent,
    TipoVehiculoSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
