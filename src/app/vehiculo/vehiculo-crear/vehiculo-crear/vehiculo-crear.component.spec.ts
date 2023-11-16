import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoCrearComponent } from './vehiculo-crear.component';

describe('VehiculoCrearComponent', () => {
  let component: VehiculoCrearComponent;
  let fixture: ComponentFixture<VehiculoCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiculoCrearComponent]
    });
    fixture = TestBed.createComponent(VehiculoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
