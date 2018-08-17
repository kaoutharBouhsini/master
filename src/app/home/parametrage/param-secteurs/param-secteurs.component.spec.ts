import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamSecteursComponent } from './param-secteurs.component';

describe('ParamSecteursComponent', () => {
  let component: ParamSecteursComponent;
  let fixture: ComponentFixture<ParamSecteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamSecteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamSecteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
