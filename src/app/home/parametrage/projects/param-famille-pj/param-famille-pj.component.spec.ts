import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamFamillePjComponent } from './param-famille-pj.component';

describe('ParamFamillePjComponent', () => {
  let component: ParamFamillePjComponent;
  let fixture: ComponentFixture<ParamFamillePjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamFamillePjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamFamillePjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
