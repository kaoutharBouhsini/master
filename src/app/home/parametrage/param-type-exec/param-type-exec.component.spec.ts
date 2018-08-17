import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamTypeExecComponent } from './param-type-exec.component';

describe('ParamTypeExecComponent', () => {
  let component: ParamTypeExecComponent;
  let fixture: ComponentFixture<ParamTypeExecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamTypeExecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamTypeExecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
