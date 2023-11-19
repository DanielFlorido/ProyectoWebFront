import { TestBed } from '@angular/core/testing';

import { TipoVehiculoServiceService } from './tipo-vehiculo-service.service';

describe('TipoVehiculoServiceService', () => {
  let service: TipoVehiculoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoVehiculoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
