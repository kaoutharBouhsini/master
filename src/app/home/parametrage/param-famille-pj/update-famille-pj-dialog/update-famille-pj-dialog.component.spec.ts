import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFamillePjDialogComponent } from './update-famille-pj-dialog.component';

describe('UpdateFamillePjDialogComponent', () => {
  let component: UpdateFamillePjDialogComponent;
  let fixture: ComponentFixture<UpdateFamillePjDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFamillePjDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFamillePjDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
