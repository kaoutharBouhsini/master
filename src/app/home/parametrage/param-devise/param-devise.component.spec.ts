import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamDeviseComponent } from './param-devise.component';

describe('ParamDeviseComponent', () => {
  let component: ParamDeviseComponent;
  let fixture: ComponentFixture<ParamDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
