import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeExecDialogComponent } from './update-type-exec-dialog.component';

describe('UpdateTypeExecDialogComponent', () => {
  let component: UpdateTypeExecDialogComponent;
  let fixture: ComponentFixture<UpdateTypeExecDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTypeExecDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypeExecDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
