import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntiteDialogComponent } from './add-entite-dialog.component';

describe('AddEntiteDialogComponent', () => {
  let component: AddEntiteDialogComponent;
  let fixture: ComponentFixture<AddEntiteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEntiteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEntiteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
