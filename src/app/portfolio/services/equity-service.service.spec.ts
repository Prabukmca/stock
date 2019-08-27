import { TestBed } from '@angular/core/testing';

import { EquityServiceService } from './equity-service.service';

describe('EquityServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquityServiceService = TestBed.get(EquityServiceService);
    expect(service).toBeTruthy();
  });
});
