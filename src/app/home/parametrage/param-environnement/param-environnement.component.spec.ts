import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamEnvironnementComponent } from './param-environnement.component';

describe('ParamEnvironnementComponent', () => {
  let component: ParamEnvironnementComponent;
  let fixture: ComponentFixture<ParamEnvironnementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamEnvironnementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamEnvironnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
