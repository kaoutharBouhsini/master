import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStatutProjetDialogComponent } from './update-statut-projet-dialog.component';

describe('UpdateStatutProjetDialogComponent', () => {
  let component: UpdateStatutProjetDialogComponent;
  let fixture: ComponentFixture<UpdateStatutProjetDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStatutProjetDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStatutProjetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
