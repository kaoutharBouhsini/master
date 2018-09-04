import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSecteurDialogComponent } from './update-secteur-dialog.component';

describe('UpdateSecteurDialogComponent', () => {
  let component: UpdateSecteurDialogComponent;
  let fixture: ComponentFixture<UpdateSecteurDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSecteurDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSecteurDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
