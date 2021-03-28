import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { CanActivateProgramGuard } from './can-activate-program.guard';

describe('CanActivateProgramGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateProgramGuard]
    });
  });

  it('should ...', inject([CanActivateProgramGuard], (guard: CanActivateProgramGuard) => {
    expect(guard).toBeTruthy();
  }));
});
