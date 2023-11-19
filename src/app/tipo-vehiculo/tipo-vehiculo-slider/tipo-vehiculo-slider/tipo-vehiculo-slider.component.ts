import { TipoVehiculoServiceService } from './../../../shared/tipo-vehiculo-service/tipo-vehiculo-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { TipoVehiculo } from 'src/app/model/vehiculo/tipo-vehiculo';

@Component({
  selector: 'app-tipo-vehiculo-slider',
  templateUrl: './tipo-vehiculo-slider.component.html',
  styleUrls: ['./tipo-vehiculo-slider.component.css']
})
export class TipoVehiculoSliderComponent implements OnInit {
  activeIndex: number = 0;
  tipoVehiculos : TipoVehiculo[]=[]
  constructor(private TipoVehiculoServiceService : TipoVehiculoServiceService) { }
  ngOnInit(): void {
    this.TipoVehiculoServiceService.findAll().subscribe(
      tipoVehiculos => this.tipoVehiculos = tipoVehiculos
    )
  }

  setActiveIndex(index: number) {
    this.activeIndex = index;
  }

  moveSlider(direction: number) {
    // Mover el slider en la dirección especificada
    this.activeIndex += direction;

    // Asegurarse de que el índice no sea menor que 0 o mayor que el número de elementos
    if (this.activeIndex < 0) {
      this.activeIndex = this.tipoVehiculos.length - 1;
    } else if (this.activeIndex >= this.tipoVehiculos.length) {
      this.activeIndex = 0;
    }
  }
}
