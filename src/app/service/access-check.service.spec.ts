import { TestBed, inject } from '@angular/core/testing';

import { AccessCheckService } from './access-check.service';

describe('AccessCheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessCheckService]
    });
  });

  it('should be created', inject([AccessCheckService], (service: AccessCheckService) => {
    expect(service).toBeTruthy();
  }));
});
