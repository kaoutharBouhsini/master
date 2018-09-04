import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamEntiteComponent } from './param-entite.component';

describe('ParamEntiteComponent', () => {
  let component: ParamEntiteComponent;
  let fixture: ComponentFixture<ParamEntiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamEntiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamEntiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
