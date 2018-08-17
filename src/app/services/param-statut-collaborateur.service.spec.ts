import { TestBed, inject } from '@angular/core/testing';

import { ParamStatutCollaborateurService } from './param-statut-collaborateur.service';

describe('ParamStatutCollaborateurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParamStatutCollaborateurService]
    });
  });

  it('should be created', inject([ParamStatutCollaborateurService], (service: ParamStatutCollaborateurService) => {
    expect(service).toBeTruthy();
  }));
});
