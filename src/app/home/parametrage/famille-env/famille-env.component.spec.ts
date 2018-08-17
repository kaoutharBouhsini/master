import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilleEnvComponent } from './famille-env.component';

describe('FamilleEnvComponent', () => {
  let component: FamilleEnvComponent;
  let fixture: ComponentFixture<FamilleEnvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilleEnvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilleEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
