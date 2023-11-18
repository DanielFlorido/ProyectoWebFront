import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoListByPisoComponent } from './vehiculo-list-by-piso.component';

describe('VehiculoListByPisoComponent', () => {
  let component: VehiculoListByPisoComponent;
  let fixture: ComponentFixture<VehiculoListByPisoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiculoListByPisoComponent]
    });
    fixture = TestBed.createComponent(VehiculoListByPisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
