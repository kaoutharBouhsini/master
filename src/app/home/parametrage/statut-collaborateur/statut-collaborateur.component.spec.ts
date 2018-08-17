import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutCollaborateurComponent } from './statut-collaborateur.component';

describe('StatutCollaborateurComponent', () => {
  let component: StatutCollaborateurComponent;
  let fixture: ComponentFixture<StatutCollaborateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatutCollaborateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatutCollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
