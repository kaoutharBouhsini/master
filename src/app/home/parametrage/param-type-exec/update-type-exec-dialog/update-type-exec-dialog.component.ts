import { ParamTypeExecutionProjet } from './../../../../beans/param_type_execution_projet';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component,  EventEmitter, Output, Inject } from '@angular/core';
@Component({
  selector: 'app-update-type-exec-dialog',
  templateUrl: './update-type-exec-dialog.component.html',
  styleUrls: ['./update-type-exec-dialog.component.css']
})
export class UpdateTypeExecDialogComponent  {

  @Output() update: EventEmitter<ParamTypeExecutionProjet> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: ParamTypeExecutionProjet) {}

  onSubmit() {
    this.update.emit(this.data);
    console.log('event emitted');
  }

}