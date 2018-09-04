import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRealisationDialogComponent } from './add-realisation-dialog.component';

describe('AddRealisationDialogComponent', () => {
  let component: AddRealisationDialogComponent;
  let fixture: ComponentFixture<AddRealisationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRealisationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRealisationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
