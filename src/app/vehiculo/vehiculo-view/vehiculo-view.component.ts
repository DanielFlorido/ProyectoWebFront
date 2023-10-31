import { VehiculoService } from './../../shared/vehiculoService/vehiculo.service';
import { Vehiculo } from './../../model/vehiculo/vehiculo';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehiculo-view',
  templateUrl: './vehiculo-view.component.html',
  styleUrls: ['./vehiculo-view.component.css']
})
export class VehiculoViewComponent implements OnInit {
  constructor( private vehiculoService:VehiculoService){}

  vehiculo$ : Observable<Vehiculo> | undefined

ngOnInit(): void {
}

  @Input()
  set id(VehiculoId: string){
    this.vehiculo$= this.vehiculoService.findById(+VehiculoId)
  }
}
