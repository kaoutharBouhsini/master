import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamSituationFamilialeComponent } from './param-situation-familiale.component';

describe('ParamSituationFamilialeComponent', () => {
  let component: ParamSituationFamilialeComponent;
  let fixture: ComponentFixture<ParamSituationFamilialeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamSituationFamilialeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamSituationFamilialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
