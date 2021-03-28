import { TestBed } from '@angular/core/testing';

import { PortfolioService } from './portfolio.service';

describe('PortfolioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: PortfolioService = TestBed.inject(PortfolioService);
    expect(service).toBeTruthy();
  });
});
