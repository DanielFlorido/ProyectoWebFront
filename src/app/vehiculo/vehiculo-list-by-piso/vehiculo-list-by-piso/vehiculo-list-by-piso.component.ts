import { VehiculoService } from './../../../shared/vehiculoService/vehiculo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehiculo } from 'src/app/model/vehiculo/vehiculo';

@Component({
  selector: 'app-vehiculo-list-by-piso',
  templateUrl: './vehiculo-list-by-piso.component.html',
  styleUrls: ['./vehiculo-list-by-piso.component.css']
})
export class VehiculoListByPisoComponent implements OnInit{
  vehiculos : Vehiculo[]= []
  constructor(private VehiculoService : VehiculoService, private route: ActivatedRoute){}
  ngOnInit(): void {
    const idPiso= this.route.snapshot.params['id'];
    this.VehiculoService.getVehiculosByPiso(idPiso).subscribe(
      vehiculos=> this.vehiculos = vehiculos)
  }
}
