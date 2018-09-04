import { RefFamilleDocumentation } from '../../../../../beans/ref_famille_documentation';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component,  EventEmitter, Output, Inject } from '@angular/core';
@Component({
  selector: 'app-update-famille-docs-dialog',
  templateUrl: './update-famille-docs-dialog.component.html',
  styleUrls: ['./update-famille-docs-dialog.component.css']
})
export class UpdateFamilleDocsDialogComponent {

  @Output() update: EventEmitter<RefFamilleDocumentation> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: RefFamilleDocumentation) {}

  onSubmit() {
    this.update.emit(this.data);
    console.log('event emitted');
  }
  close()
  {
    this.closed.emit();
  }
}