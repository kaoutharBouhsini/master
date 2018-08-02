import { TestBed, inject } from '@angular/core/testing';

import { RefFamillePjService } from './ref-famille-pj.service';

describe('RefFamillePjService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefFamillePjService]
    });
  });

  it('should be created', inject([RefFamillePjService], (service: RefFamillePjService) => {
    expect(service).toBeTruthy();
  }));
});
