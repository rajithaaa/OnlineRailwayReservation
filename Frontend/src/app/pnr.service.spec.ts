import { TestBed } from '@angular/core/testing';

import { PnrService } from './pnr.service';

describe('PnrService', () => {
  let service: PnrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PnrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
