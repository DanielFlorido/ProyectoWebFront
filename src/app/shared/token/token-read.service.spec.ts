import { TestBed } from '@angular/core/testing';

import { TokenReadService } from './token-read.service';

describe('TokenReadService', () => {
  let service: TokenReadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenReadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
