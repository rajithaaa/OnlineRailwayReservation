import { TestBed } from '@angular/core/testing';

import { PassengerloginService } from './passengerlogin.service';

describe('PassengerloginService', () => {
  let service: PassengerloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassengerloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
