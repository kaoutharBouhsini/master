import { TestBed, inject } from '@angular/core/testing';

import { RapportsService } from './rapports.service';

describe('RapportsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RapportsService]
    });
  });

  it('should be created', inject([RapportsService], (service: RapportsService) => {
    expect(service).toBeTruthy();
  }));
});
