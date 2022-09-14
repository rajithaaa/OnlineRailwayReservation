import { TestBed } from '@angular/core/testing';

import { PassengerregisterService } from './passengerregister.service';

describe('PassengerregisterService', () => {
  let service: PassengerregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassengerregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
