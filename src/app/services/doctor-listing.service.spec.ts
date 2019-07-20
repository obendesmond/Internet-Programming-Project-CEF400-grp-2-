import { TestBed } from '@angular/core/testing';

import { DoctorListingService } from './doctor-listing.service';

describe('DoctorListingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctorListingService = TestBed.get(DoctorListingService);
    expect(service).toBeTruthy();
  });
});
