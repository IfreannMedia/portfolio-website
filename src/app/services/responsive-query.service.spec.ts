import { TestBed } from '@angular/core/testing';

import { ResponsiveQueryService } from './responsive-query.service';

describe('ResponsiveQueryService', () => {
  let service: ResponsiveQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsiveQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
