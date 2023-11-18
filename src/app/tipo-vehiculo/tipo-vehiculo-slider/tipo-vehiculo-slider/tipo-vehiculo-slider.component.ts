import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tipo-vehiculo-slider',
  templateUrl: './tipo-vehiculo-slider.component.html',
  styleUrls: ['./tipo-vehiculo-slider.component.css']
})
export class TipoVehiculoSliderComponent {
  @Input() vehiculos: any[] = [];
  activeIndex: number = 0;

  constructor() { }

  setActiveIndex(index: number) {
    this.activeIndex = index;
  }
}
