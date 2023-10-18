import { TipoVehiculo } from './model/vehiculo/tipo-vehiculo';
import { Piso } from './model/piso/piso';
import { Vehiculo } from './model/vehiculo/vehiculo';
import { PisoService } from './shared/piso.service';
import { Component } from '@angular/core';
import { Edificio } from './model/edificio/edificio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoWebFront';

  constructor(private pisoService: PisoService) { }
  edificio: Edificio = new Edificio();
  piso: Piso = new Piso(1, this.edificio, 1, 1, null);
  tipoVehiculo: TipoVehiculo = new TipoVehiculo(1, "", 1, 1, null);
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

}