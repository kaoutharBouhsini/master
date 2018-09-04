import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFamilleDocsDialogComponent } from './add-famille-docs-dialog.component';

describe('AddFamilleDocsDialogComponent', () => {
  let component: AddFamilleDocsDialogComponent;
  let fixture: ComponentFixture<AddFamilleDocsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFamilleDocsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFamilleDocsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
