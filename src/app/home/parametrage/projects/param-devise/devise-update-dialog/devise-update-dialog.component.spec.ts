import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviseUpdateDialogComponent } from './devise-update-dialog.component';

describe('DeviseUpdateDialogComponent', () => {
  let component: DeviseUpdateDialogComponent;
  let fixture: ComponentFixture<DeviseUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviseUpdateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviseUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
