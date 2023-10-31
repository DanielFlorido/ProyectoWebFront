import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoViewComponent } from './vehiculo-view.component';

describe('VehiculoViewComponent', () => {
  let component: VehiculoViewComponent;
  let fixture: ComponentFixture<VehiculoViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiculoViewComponent]
    });
    fixture = TestBed.createComponent(VehiculoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
