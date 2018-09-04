import { RefFamilleDocumentation } from '../../../../../beans/ref_famille_documentation';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component,  Output, EventEmitter, Inject } from '@angular/core';
@Component({
  selector: 'app-add-famille-docs-dialog',
  templateUrl: './add-famille-docs-dialog.component.html',
  styleUrls: ['./add-famille-docs-dialog.component.css']
})
export class AddFamilleDocsDialogComponent {

  @Output() add: EventEmitter<RefFamilleDocumentation> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: RefFamilleDocumentation[]) { }
  famille = new RefFamilleDocumentation();

  onSubmit() {
    this.add.emit(this.famille);
    console.log('event emitted');
  }

  isUnique(type: string)
  {
    return this.data.filter(it => it.name == type).length ? false: true;
  }

  close()
  {
    this.closed.emit();
  }
}