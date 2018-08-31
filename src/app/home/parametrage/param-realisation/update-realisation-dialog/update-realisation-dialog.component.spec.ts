import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRealisationDialogComponent } from './update-realisation-dialog.component';

describe('UpdateRealisationDialogComponent', () => {
  let component: UpdateRealisationDialogComponent;
  let fixture: ComponentFixture<UpdateRealisationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRealisationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRealisationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
