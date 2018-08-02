import { TestBed, inject } from '@angular/core/testing';

import { RefFonctionRhService } from './ref-fonction-rh.service';

describe('RefFonctionRhService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefFonctionRhService]
    });
  });

  it('should be created', inject([RefFonctionRhService], (service: RefFonctionRhService) => {
    expect(service).toBeTruthy();
  }));
});
