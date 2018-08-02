import { TestBed, inject } from '@angular/core/testing';

import { ProjetDocsService } from './projet-docs.service';

describe('ProjetDocsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjetDocsService]
    });
  });

  it('should be created', inject([ProjetDocsService], (service: ProjetDocsService) => {
    expect(service).toBeTruthy();
  }));
});
