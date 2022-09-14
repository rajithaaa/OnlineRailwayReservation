import { TestBed } from '@angular/core/testing';

import { TraindataService } from './traindata.service';

describe('TraindataService', () => {
  let service: TraindataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraindataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
