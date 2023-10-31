import { VehiculoService } from './../../shared/vehiculoService/vehiculo.service';
import { PisoService } from './../../shared/piso.service';
import { Component, OnInit } from "@angular/core";
import { Vehiculo } from 'src/app/model/vehiculo/vehiculo';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  vehiculos : Vehiculo[]=[]

  constructor(private vehiculoService: VehiculoService){ }

  ngOnInit(): void {
    this.vehiculoService.findAll().subscribe(vehiculos => this.vehiculos= vehiculos)
  }
  
}
