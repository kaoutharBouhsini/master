import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeviseDialogComponent } from './add-devise-dialog.component';

describe('AddDeviseDialogComponent', () => {
  let component: AddDeviseDialogComponent;
  let fixture: ComponentFixture<AddDeviseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeviseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeviseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
