import { TestBed, inject } from '@angular/core/testing';

import { RefRealisationService } from './ref-realisation.service';

describe('RefRealisationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefRealisationService]
    });
  });

  it('should be created', inject([RefRealisationService], (service: RefRealisationService) => {
    expect(service).toBeTruthy();
  }));
});
