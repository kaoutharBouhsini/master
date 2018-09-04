import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeEnvDialogComponent } from './add-type-env-dialog.component';

describe('AddTypeEnvDialogComponent', () => {
  let component: AddTypeEnvDialogComponent;
  let fixture: ComponentFixture<AddTypeEnvDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTypeEnvDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeEnvDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
