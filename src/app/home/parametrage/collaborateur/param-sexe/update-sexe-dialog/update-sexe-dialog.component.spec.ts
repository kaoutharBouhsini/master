import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSexeDialogComponent } from './update-sexe-dialog.component';

describe('UpdateSexeDialogComponent', () => {
  let component: UpdateSexeDialogComponent;
  let fixture: ComponentFixture<UpdateSexeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSexeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSexeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
