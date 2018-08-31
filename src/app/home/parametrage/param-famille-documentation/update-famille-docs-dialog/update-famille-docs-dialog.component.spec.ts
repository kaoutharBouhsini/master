import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFamilleDocsDialogComponent } from './update-famille-docs-dialog.component';

describe('UpdateFamilleDocsDialogComponent', () => {
  let component: UpdateFamilleDocsDialogComponent;
  let fixture: ComponentFixture<UpdateFamilleDocsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFamilleDocsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFamilleDocsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
