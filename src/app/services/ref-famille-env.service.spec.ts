import { TestBed, inject } from '@angular/core/testing';

import { RefFamilleEnvService } from './ref-famille-env.service';

describe('RefFamilleEnvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefFamilleEnvService]
    });
  });

  it('should be created', inject([RefFamilleEnvService], (service: RefFamilleEnvService) => {
    expect(service).toBeTruthy();
  }));
});
