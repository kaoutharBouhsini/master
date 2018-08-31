import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEnvDialogComponent } from './update-env-dialog.component';

describe('UpdateEnvDialogComponent', () => {
  let component: UpdateEnvDialogComponent;
  let fixture: ComponentFixture<UpdateEnvDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEnvDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEnvDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
