import { TestBed } from '@angular/core/testing';

import { DataManagerService } from './data-manager.service';

xdescribe('DataManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: DataManagerService = TestBed.get(DataManagerService);
    expect(service).toBeTruthy();
  });
});
