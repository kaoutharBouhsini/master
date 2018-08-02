import { TestBed, inject } from '@angular/core/testing';

import { RolesTasksService } from './roles-tasks.service';

describe('RolesTasksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolesTasksService]
    });
  });

  it('should be created', inject([RolesTasksService], (service: RolesTasksService) => {
    expect(service).toBeTruthy();
  }));
});
