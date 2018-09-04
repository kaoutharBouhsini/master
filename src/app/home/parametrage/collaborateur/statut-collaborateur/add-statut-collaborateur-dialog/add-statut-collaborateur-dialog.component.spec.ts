import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStatutCollaborateurDialogComponent } from './add-statut-collaborateur-dialog.component';

describe('AddStatutCollaborateurDialogComponent', () => {
  let component: AddStatutCollaborateurDialogComponent;
  let fixture: ComponentFixture<AddStatutCollaborateurDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStatutCollaborateurDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStatutCollaborateurDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
