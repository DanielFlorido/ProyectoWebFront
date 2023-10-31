import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoRetirarComponent } from './vehiculo-retirar.component';

describe('VehiculoRetirarComponent', () => {
  let component: VehiculoRetirarComponent;
  let fixture: ComponentFixture<VehiculoRetirarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiculoRetirarComponent]
    });
    fixture = TestBed.createComponent(VehiculoRetirarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
