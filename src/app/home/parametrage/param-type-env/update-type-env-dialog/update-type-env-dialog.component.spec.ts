import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeEnvDialogComponent } from './update-type-env-dialog.component';

describe('UpdateTypeEnvDialogComponent', () => {
  let component: UpdateTypeEnvDialogComponent;
  let fixture: ComponentFixture<UpdateTypeEnvDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTypeEnvDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypeEnvDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
