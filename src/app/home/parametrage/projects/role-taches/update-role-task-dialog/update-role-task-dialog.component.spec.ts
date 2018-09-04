import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRoleTaskDialogComponent } from './update-role-task-dialog.component';

describe('UpdateRoleTaskDialogComponent', () => {
  let component: UpdateRoleTaskDialogComponent;
  let fixture: ComponentFixture<UpdateRoleTaskDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRoleTaskDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRoleTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
