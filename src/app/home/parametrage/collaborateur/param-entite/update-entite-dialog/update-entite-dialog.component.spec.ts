import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEntiteDialogComponent } from './update-entite-dialog.component';

describe('UpdateEntiteDialogComponent', () => {
  let component: UpdateEntiteDialogComponent;
  let fixture: ComponentFixture<UpdateEntiteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEntiteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEntiteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
