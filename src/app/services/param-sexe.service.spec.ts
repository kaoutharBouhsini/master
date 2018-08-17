import { TestBed, inject } from '@angular/core/testing';

import { ParamSexeService } from './param-sexe.service';

describe('ParamSexeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParamSexeService]
    });
  });

  it('should be created', inject([ParamSexeService], (service: ParamSexeService) => {
    expect(service).toBeTruthy();
  }));
});
