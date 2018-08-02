import { TestBed, inject } from '@angular/core/testing';

import { RefNiveauEtudesService } from './ref-niveau-etudes.service';

describe('RefNiveauEtudesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefNiveauEtudesService]
    });
  });

  it('should be created', inject([RefNiveauEtudesService], (service: RefNiveauEtudesService) => {
    expect(service).toBeTruthy();
  }));
});
