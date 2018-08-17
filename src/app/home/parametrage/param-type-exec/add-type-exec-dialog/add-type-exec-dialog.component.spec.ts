import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeExecDialogComponent } from './add-type-exec-dialog.component';

describe('AddTypeExecDialogComponent', () => {
  let component: AddTypeExecDialogComponent;
  let fixture: ComponentFixture<AddTypeExecDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTypeExecDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeExecDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
