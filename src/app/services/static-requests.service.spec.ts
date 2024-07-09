import { TestBed } from '@angular/core/testing';

import { StaticRequestsService } from './static-requests.service';

describe('StaticRequestsService', () => {
  let service: StaticRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
