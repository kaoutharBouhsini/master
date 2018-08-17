import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSexeDialogComponent } from './add-sexe-dialog.component';

describe('AddSexeDialogComponent', () => {
  let component: AddSexeDialogComponent;
  let fixture: ComponentFixture<AddSexeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSexeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSexeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
