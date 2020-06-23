import { TestBed } from '@angular/core/testing';

import { ProjectService.TsService } from './project-service.ts.service';

describe('ProjectService.TsService', () => {
  let service: ProjectService.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
