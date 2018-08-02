import { TestBed, inject } from '@angular/core/testing';

import { ParamDeviseService } from './param-devise.service';

describe('ParamDeviseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParamDeviseService]
    });
  });

  it('should be created', inject([ParamDeviseService], (service: ParamDeviseService) => {
    expect(service).toBeTruthy();
  }));
});
