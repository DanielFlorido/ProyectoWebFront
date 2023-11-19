import { TipoVehiculo } from './model/vehiculo/tipo-vehiculo';
import { Piso } from './model/piso/piso';
import { Vehiculo } from './model/vehiculo/vehiculo';
import { PisoService } from './shared/pisoService/piso.service';
import { Component } from '@angular/core';
import { Edificio } from './model/edificio/edificio';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoWebFront';

  constructor(private pisoService: PisoService) { }
  edificio: Edificio = new Edificio(1,"cosa"); 
  tipoVehiculo: TipoVehiculo = new TipoVehiculo(1, "", 1, 1, null, " ", " ");
  piso: Piso = new Piso(1, this.edificio, 1, 1,this.tipoVehiculo, null);
  vehiculo: Vehiculo = new Vehiculo(1, "", this.piso , this.tipoVehiculo, 1200)

  registrarVehiculo() {
    this.pisoService.registrarVehiculo(this.vehiculo).subscribe({
      next: dato => console.log(dato),
      error: msg => {
        console.error("Hubo un error:");
        console.error(msg);
      }
    });
  }

  crearVehiculo() {
    this.pisoService.crearVehiculo(this.vehiculo).subscribe({
      next: dato => console.log(dato),
      error: msg => {
        console.error("Hubo un error:");
        console.error(msg);
      }
    });
  }

  registrarSalida() {
    this.pisoService.registrarSalida(this.vehiculo).subscribe({
      next: dato => console.log(dato),
      error: msg => {
        console.error("Hubo un error:");
        console.error(msg);
      }
    });
  }
  
}
