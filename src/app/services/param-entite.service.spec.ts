import { TestBed, inject } from '@angular/core/testing';

import { ParamEntiteService } from './param-entite.service';

describe('ParamEntiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParamEntiteService]
    });
  });

  it('should be created', inject([ParamEntiteService], (service: ParamEntiteService) => {
    expect(service).toBeTruthy();
  }));
});
