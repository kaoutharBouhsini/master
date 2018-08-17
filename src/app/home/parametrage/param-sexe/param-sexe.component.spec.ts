import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamSexeComponent } from './param-sexe.component';

describe('ParamSexeComponent', () => {
  let component: ParamSexeComponent;
  let fixture: ComponentFixture<ParamSexeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamSexeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamSexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
