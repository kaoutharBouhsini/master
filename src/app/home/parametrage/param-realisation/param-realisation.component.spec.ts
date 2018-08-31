import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamRealisationComponent } from './param-realisation.component';

describe('ParamRealisationComponent', () => {
  let component: ParamRealisationComponent;
  let fixture: ComponentFixture<ParamRealisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamRealisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamRealisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
