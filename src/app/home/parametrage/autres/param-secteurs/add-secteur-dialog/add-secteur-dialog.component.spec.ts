import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecteurDialogComponent } from './add-secteur-dialog.component';

describe('AddSecteurDialogComponent', () => {
  let component: AddSecteurDialogComponent;
  let fixture: ComponentFixture<AddSecteurDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSecteurDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSecteurDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
