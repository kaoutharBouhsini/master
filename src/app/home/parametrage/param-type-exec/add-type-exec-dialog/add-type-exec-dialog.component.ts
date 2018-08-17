import { ParamTypeExecutionProjet } from './../../../../beans/param_type_execution_projet';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component,  Output, EventEmitter, Inject } from '@angular/core';
@Component({
  selector: 'app-add-type-exec-dialog',
  templateUrl: './add-type-exec-dialog.component.html',
  styleUrls: ['./add-type-exec-dialog.component.css']
})
export class AddTypeExecDialogComponent {

  @Output() add: EventEmitter<ParamTypeExecutionProjet> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: ParamTypeExecutionProjet[]) { }
  typeExec = new ParamTypeExecutionProjet();

  onSubmit() {
    this.add.emit(this.typeExec);
    console.log('event emitted');
  }

  isUnique(type: string)
  {
    return this.data.filter(it => it.name == type).length ? false: true;
  }
}