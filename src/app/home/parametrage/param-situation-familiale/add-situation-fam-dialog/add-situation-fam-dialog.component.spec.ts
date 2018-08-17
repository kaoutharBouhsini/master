import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSituationFamDialogComponent } from './add-situation-fam-dialog.component';

describe('AddSituationFamDialogComponent', () => {
  let component: AddSituationFamDialogComponent;
  let fixture: ComponentFixture<AddSituationFamDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSituationFamDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSituationFamDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
