import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStatutProjetDialogComponent } from './add-statut-projet-dialog.component';

describe('AddStatutProjetDialogComponent', () => {
  let component: AddStatutProjetDialogComponent;
  let fixture: ComponentFixture<AddStatutProjetDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStatutProjetDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStatutProjetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
