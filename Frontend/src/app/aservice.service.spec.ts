import { TestBed } from '@angular/core/testing';

import { AserviceService } from './aservice.service';

describe('AserviceService', () => {
  let service: AserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
