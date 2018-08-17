import { TestBed, inject } from '@angular/core/testing';

import { ParamSituationFamilialeService } from './param-situation-familiale.service';

describe('ParamSituationFamilialeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParamSituationFamilialeService]
    });
  });

  it('should be created', inject([ParamSituationFamilialeService], (service: ParamSituationFamilialeService) => {
    expect(service).toBeTruthy();
  }));
});
