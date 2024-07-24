import { TestBed } from '@angular/core/testing';

import { CatfactServiceService } from './catfact-service.service';

describe('CatfactServiceService', () => {
  let service: CatfactServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatfactServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});