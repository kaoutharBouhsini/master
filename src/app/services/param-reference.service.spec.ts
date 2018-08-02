import { TestBed, inject } from '@angular/core/testing';

import { ParamReferenceService } from './param-reference.service';

describe('ParamReferenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParamReferenceService]
    });
  });

  it('should be created', inject([ParamReferenceService], (service: ParamReferenceService) => {
    expect(service).toBeTruthy();
  }));
});
