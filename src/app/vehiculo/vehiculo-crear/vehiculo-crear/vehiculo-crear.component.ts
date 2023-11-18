import { PisoService } from './../../../shared/piso.service';
import { VehiculoService } from './../../../shared/vehiculoService/vehiculo.service';
import { Piso } from 'src/app/model/piso/piso';
import { Vehiculo } from './../../../model/vehiculo/vehiculo';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehiculo-crear',
  templateUrl: './vehiculo-crear.component.html',
  styleUrls: ['./vehiculo-crear.component.css']
})
export class VehiculoCrearComponent implements OnInit{
  constructor(private router : Router ,private route: ActivatedRoute,private vehiculoService: VehiculoService, private pisoService:PisoService){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['id']){
        this.idPiso= params['id'];
      }
    })
  }
  idPiso : number = 1;
  vehiculo: Vehiculo = new Vehiculo(0, '',null,null,0);
  guardarVehiculo() {
    this.vehiculoService.crearVehiculo(this.vehiculo).subscribe(
      (response) => {
        this.vehiculo = response;
        // Ahora recuperamos el Piso
        this.pisoService.recuperarPiso(this.idPiso).subscribe(
          (piso: Piso) => {
            // Verifica que se haya recuperado correctamente el Piso
            if (piso) {
              // Ahora podemos asignar el Piso al vehículo
              this.vehiculo.piso = piso;
              this.vehiculo.tipoVehiculo = piso.tipoVehiculo;
              // Y finalmente, guardamos el vehículo con el Piso asignado
              this.pisoService.guardarVehiculo(this.idPiso, this.vehiculo).subscribe(
                (guardarRespuesta) => {
                  this.router.navigate(['gestionParqueadero/pisos/vehiculos/',this.idPiso])
                  console.log('Vehículo guardado en el Piso:', guardarRespuesta);
                },
                (guardarError) => {
                  console.error('Error al guardar el vehículo en el Piso:', guardarError);
                }
              );
            } else {
              console.error('No se pudo recuperar el Piso con id:', this.idPiso);
            }
          },
          (pisoError) => {
            console.error('Error al recuperar el Piso:', pisoError);
          }
        );
      },
      (error) => {
        console.error('Error al crear el vehículo:', error);
      }
    );
  }
  
}
