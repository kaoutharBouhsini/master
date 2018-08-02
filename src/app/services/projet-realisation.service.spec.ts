import { TestBed, inject } from '@angular/core/testing';

import { ProjetRealisationService } from './projet-realisation.service';

describe('ProjetRealisationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjetRealisationService]
    });
  });

  it('should be created', inject([ProjetRealisationService], (service: ProjetRealisationService) => {
    expect(service).toBeTruthy();
  }));
});
