import { TestBed } from '@angular/core/testing';

import { LacService } from './lac.service';

describe('LacService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LacService = TestBed.inject(LacService);
    expect(service).toBeTruthy();
  });
});
