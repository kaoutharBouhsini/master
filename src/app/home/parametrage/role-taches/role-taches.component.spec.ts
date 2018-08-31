import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleTachesComponent } from './role-taches.component';

describe('RoleTachesComponent', () => {
  let component: RoleTachesComponent;
  let fixture: ComponentFixture<RoleTachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleTachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
