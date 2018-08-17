import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFamilleDialogComponent } from './update-famille-dialog.component';

describe('UpdateFamilleDialogComponent', () => {
  let component: UpdateFamilleDialogComponent;
  let fixture: ComponentFixture<UpdateFamilleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFamilleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFamilleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
