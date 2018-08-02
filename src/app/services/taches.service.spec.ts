import { TestBed, inject } from '@angular/core/testing';

import { TachesService } from './taches.service';

describe('TachesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TachesService]
    });
  });

  it('should be created', inject([TachesService], (service: TachesService) => {
    expect(service).toBeTruthy();
  }));
});
