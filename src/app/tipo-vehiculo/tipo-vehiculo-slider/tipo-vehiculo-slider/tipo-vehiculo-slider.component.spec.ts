import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoVehiculoSliderComponent } from './tipo-vehiculo-slider.component';

describe('TipoVehiculoSliderComponent', () => {
  let component: TipoVehiculoSliderComponent;
  let fixture: ComponentFixture<TipoVehiculoSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoVehiculoSliderComponent]
    });
    fixture = TestBed.createComponent(TipoVehiculoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
