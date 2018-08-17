import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFamilleDialogComponent } from './add-famille-dialog.component';

describe('AddFamilleDialogComponent', () => {
  let component: AddFamilleDialogComponent;
  let fixture: ComponentFixture<AddFamilleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFamilleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFamilleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
