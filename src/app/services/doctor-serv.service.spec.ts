import { TestBed } from '@angular/core/testing';

import { DoctorServService } from './doctor-serv.service';

describe('DoctorServService', () => {
  let service: DoctorServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
