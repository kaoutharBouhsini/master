import { TestBed, inject } from '@angular/core/testing';

import { RefFamilleDocsService } from './ref-famille-docs.service';

describe('RefFamilleDocsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefFamilleDocsService]
    });
  });

  it('should be created', inject([RefFamilleDocsService], (service: RefFamilleDocsService) => {
    expect(service).toBeTruthy();
  }));
});
