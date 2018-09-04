import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFamillePjDialogComponent } from './add-famille-pj-dialog.component';

describe('AddFamillePjDialogComponent', () => {
  let component: AddFamillePjDialogComponent;
  let fixture: ComponentFixture<AddFamillePjDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFamillePjDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFamillePjDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
