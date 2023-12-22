import { TestBed } from '@angular/core/testing';

import { UploadZoneService } from './upload-zone.service';

describe('UploadZoneService', () => {
  let service: UploadZoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadZoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
