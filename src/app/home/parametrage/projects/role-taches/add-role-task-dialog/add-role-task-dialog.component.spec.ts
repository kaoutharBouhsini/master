import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoleTaskDialogComponent } from './add-role-task-dialog.component';

describe('AddRoleTaskDialogComponent', () => {
  let component: AddRoleTaskDialogComponent;
  let fixture: ComponentFixture<AddRoleTaskDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRoleTaskDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoleTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
