import { TestBed, inject } from '@angular/core/testing';

import { ProjetScreenService } from './projet-screen.service';

describe('ProjetScreenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjetScreenService]
    });
  });

  it('should be created', inject([ProjetScreenService], (service: ProjetScreenService) => {
    expect(service).toBeTruthy();
  }));
});
