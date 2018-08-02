import { TestBed, inject } from '@angular/core/testing';

import { ProjetCollaborateurRolesService } from './projet-collaborateur-roles.service';

describe('ProjetCollaborateurRolesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjetCollaborateurRolesService]
    });
  });

  it('should be created', inject([ProjetCollaborateurRolesService], (service: ProjetCollaborateurRolesService) => {
    expect(service).toBeTruthy();
  }));
});
