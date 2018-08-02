import { TestBed, inject } from '@angular/core/testing';

import { ParamTypeExecProjetService } from './param-type-exec-projet.service';

describe('ParamTypeExecProjetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParamTypeExecProjetService]
    });
  });

  it('should be created', inject([ParamTypeExecProjetService], (service: ParamTypeExecProjetService) => {
    expect(service).toBeTruthy();
  }));
});
