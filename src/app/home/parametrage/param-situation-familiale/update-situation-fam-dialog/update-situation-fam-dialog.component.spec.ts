import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSituationFamDialogComponent } from './update-situation-fam-dialog.component';

describe('UpdateSituationFamDialogComponent', () => {
  let component: UpdateSituationFamDialogComponent;
  let fixture: ComponentFixture<UpdateSituationFamDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSituationFamDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSituationFamDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
