import { VehiculoService } from './../../../shared/vehiculoService/vehiculo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculo } from 'src/app/model/vehiculo/vehiculo';

@Component({
  selector: 'app-vehiculo-list-by-piso',
  templateUrl: './vehiculo-list-by-piso.component.html',
  styleUrls: ['./vehiculo-list-by-piso.component.css']
})
export class VehiculoListByPisoComponent implements OnInit{
  vehiculos : Vehiculo[]= []
  piso: number = 1
  constructor(private router: Router,private VehiculoService : VehiculoService, private route: ActivatedRoute){}
  ngOnInit(): void {
    const idPiso= this.route.snapshot.params['id'];
    this.piso= idPiso;
    this.VehiculoService.getVehiculosByPiso(idPiso).subscribe(
      vehiculos=> this.vehiculos = vehiculos)
  }
  nuevoVehiculo(){
    const url = `/gestionParqueadero/pisos/${this.piso}/nuevoVehiculo`
    this.router.navigate([url])
  }
}
