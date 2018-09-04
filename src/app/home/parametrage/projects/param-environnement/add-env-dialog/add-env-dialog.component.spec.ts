import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnvDialogComponent } from './add-env-dialog.component';

describe('AddEnvDialogComponent', () => {
  let component: AddEnvDialogComponent;
  let fixture: ComponentFixture<AddEnvDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEnvDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnvDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
