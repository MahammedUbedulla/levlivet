import { TestBed, inject } from '@angular/core/testing';

import { DischargeQueueService } from './discharge-queue.service';

describe('DischargeQueueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DischargeQueueService]
    });
  });

  it('should be created', inject([DischargeQueueService], (service: DischargeQueueService) => {
    expect(service).toBeTruthy();
  }));
});
