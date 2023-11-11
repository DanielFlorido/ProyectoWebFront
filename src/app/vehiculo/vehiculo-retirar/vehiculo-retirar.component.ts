import { Observable } from 'rxjs';
import { DtoVehiculo } from './../../dto/dtoVehiculo/dtoVehiculo';
import { VehiculoService } from './../../shared/vehiculoService/vehiculo.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vehiculo-retirar',
  templateUrl: './vehiculo-retirar.component.html',
  styleUrls: ['./vehiculo-retirar.component.css']
})
export class VehiculoRetirarComponent {
    constructor(private vehiculoService: VehiculoService){}

    dtoVehiculo$ : Observable<DtoVehiculo> | undefined

    ngOnInit(): void {
    }
    
    @Input()
    set id(vehiculoId : string){
      this.dtoVehiculo$= this.vehiculoService.retirarVehiculo(+vehiculoId)
    }
}
