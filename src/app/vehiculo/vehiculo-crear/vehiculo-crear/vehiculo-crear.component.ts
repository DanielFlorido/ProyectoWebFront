import { PisoService } from './../../../shared/piso.service';
import { VehiculoService } from './../../../shared/vehiculoService/vehiculo.service';
import { Piso } from 'src/app/model/piso/piso';
import { Vehiculo } from './../../../model/vehiculo/vehiculo';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehiculo-crear',
  templateUrl: './vehiculo-crear.component.html',
  styleUrls: ['./vehiculo-crear.component.css']
})
export class VehiculoCrearComponent {
  constructor(private vehiculoService: VehiculoService, private pisoService:PisoService){}
  
}
