import { TestBed, inject } from '@angular/core/testing';

import { ProjetAttachementsService } from './projet-attachements.service';

describe('ProjetAttachementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjetAttachementsService]
    });
  });

  it('should be created', inject([ProjetAttachementsService], (service: ProjetAttachementsService) => {
    expect(service).toBeTruthy();
  }));
});
