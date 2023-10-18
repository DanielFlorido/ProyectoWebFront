import { TipoVehiculo } from './model/vehiculo/tipo-vehiculo';
import { Piso } from './model/piso/piso';
import { Vehiculo } from './model/vehiculo/vehiculo';
import { PisoService } from './shared/piso.service';
import { Component } from '@angular/core';
import { Edificio } from './model/edificio/edificio';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoWebFront';

  constructor(private pisoService: PisoService, private formBuilder: FormBuilder) { }

  checkoutForm = this.formBuilder.group({
    placa: '',
    pisoId: '',
    tipoVehiculoS: '',
    horaLlegada: ''
  });

  placaAux = (<HTMLInputElement>document.getElementById("placa")).value;
  pisoIdAux = (<HTMLInputElement>document.getElementById("pisoId")).value;
  tipoVehiculoSAux = (<HTMLInputElement>document.getElementById("tipoVehiculoS")).value;
  horaLlegadaAux = (<HTMLInputElement>document.getElementById("horaLlegada")).value;

  edificio: Edificio = new Edificio();
  piso: Piso = new Piso(parseInt(this.pisoIdAux), this.edificio, 1, 1, null);
  tipoVehiculo: TipoVehiculo = new TipoVehiculo(1, this.tipoVehiculoSAux, 1, 1, null);
  vehiculo: Vehiculo = new Vehiculo(1, this.placaAux, this.piso , this.tipoVehiculo, parseInt(this.horaLlegadaAux) )

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

  onSubmit(): void {
    
    // Process checkout data here
    this.pisoService.crearVehiculo(this.vehiculo);
    console.warn('Vehiculo registradp', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
