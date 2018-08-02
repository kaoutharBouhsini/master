import { TestBed, inject } from '@angular/core/testing';

import { ParamStatutProjetService } from './param-statut-projet.service';

describe('ParamStatutProjetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParamStatutProjetService]
    });
  });

  it('should be created', inject([ParamStatutProjetService], (service: ParamStatutProjetService) => {
    expect(service).toBeTruthy();
  }));
});
