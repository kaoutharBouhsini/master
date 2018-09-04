import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStatutCollaborateurDialogComponent } from './update-statut-collaborateur-dialog.component';

describe('UpdateStatutCollaborateurDialogComponent', () => {
  let component: UpdateStatutCollaborateurDialogComponent;
  let fixture: ComponentFixture<UpdateStatutCollaborateurDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStatutCollaborateurDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStatutCollaborateurDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
