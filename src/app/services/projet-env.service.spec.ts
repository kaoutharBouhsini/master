import { TestBed, inject } from '@angular/core/testing';

import { ProjetEnvService } from './projet-env.service';

describe('ProjetEnvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjetEnvService]
    });
  });

  it('should be created', inject([ProjetEnvService], (service: ProjetEnvService) => {
    expect(service).toBeTruthy();
  }));
});
