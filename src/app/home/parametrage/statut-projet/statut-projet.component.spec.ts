import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutProjetComponent } from './statut-projet.component';

describe('StatutProjetComponent', () => {
  let component: StatutProjetComponent;
  let fixture: ComponentFixture<StatutProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatutProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatutProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
