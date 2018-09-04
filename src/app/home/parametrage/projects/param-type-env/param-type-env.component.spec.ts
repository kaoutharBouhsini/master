import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamTypeEnvComponent } from './param-type-env.component';

describe('ParamTypeEnvComponent', () => {
  let component: ParamTypeEnvComponent;
  let fixture: ComponentFixture<ParamTypeEnvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamTypeEnvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamTypeEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
