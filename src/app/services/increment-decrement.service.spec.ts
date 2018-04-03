import { TestBed, inject } from '@angular/core/testing';

import { IncrementDecrementService } from './increment-decrement.service';

describe('IncrementDecrementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncrementDecrementService]
    });
  });

  it('should be created', inject([IncrementDecrementService], (service: IncrementDecrementService) => {
    expect(service).toBeTruthy();
  }));
});
