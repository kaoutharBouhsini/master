import { TestBed, inject } from '@angular/core/testing';

import { EnvironnementService } from './environnement.service';

describe('EnvironnementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnvironnementService]
    });
  });

  it('should be created', inject([EnvironnementService], (service: EnvironnementService) => {
    expect(service).toBeTruthy();
  }));
});
