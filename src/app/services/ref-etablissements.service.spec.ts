import { TestBed, inject } from '@angular/core/testing';

import { RefEtablissementsService } from './ref-etablissements.service';

describe('RefEtablissementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefEtablissementsService]
    });
  });

  it('should be created', inject([RefEtablissementsService], (service: RefEtablissementsService) => {
    expect(service).toBeTruthy();
  }));
});
