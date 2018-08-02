import { TestBed, inject } from '@angular/core/testing';

import { ParamTypeEnvService } from './param-type-env.service';

describe('ParamTypeEnvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParamTypeEnvService]
    });
  });

  it('should be created', inject([ParamTypeEnvService], (service: ParamTypeEnvService) => {
    expect(service).toBeTruthy();
  }));
});
