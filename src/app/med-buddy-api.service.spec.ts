import { TestBed } from '@angular/core/testing';

import { MedBuddyAPIService } from './med-buddy-api.service';

describe('MedBuddyAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedBuddyAPIService = TestBed.get(MedBuddyAPIService);
    expect(service).toBeTruthy();
  });
});
