import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamFamilleDocumentationComponent } from './param-famille-documentation.component';

describe('ParamFamilleDocumentationComponent', () => {
  let component: ParamFamilleDocumentationComponent;
  let fixture: ComponentFixture<ParamFamilleDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamFamilleDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamFamilleDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
