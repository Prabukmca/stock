import { TestBed } from '@angular/core/testing';

import { BlogFacadeService } from './blog-facade.service';

describe('BlogFacadeService', () => {
  let service: BlogFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
