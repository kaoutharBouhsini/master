import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamRoleComponent } from './param-role.component';

describe('ParamRoleComponent', () => {
  let component: ParamRoleComponent;
  let fixture: ComponentFixture<ParamRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
