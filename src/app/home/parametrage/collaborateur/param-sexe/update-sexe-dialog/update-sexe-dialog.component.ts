import { ParamSexe } from '../../../../../beans/param-sexe';
import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '../../../../../../../node_modules/@angular/material';
@Component({
  selector: 'app-update-sexe-dialog',
  templateUrl: './update-sexe-dialog.component.html',
  styleUrls: ['./update-sexe-dialog.component.css']
})
export class UpdateSexeDialogComponent { 

  @Output() update: EventEmitter<ParamSexe> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: ParamSexe) {}

  onSubmit() {
    this.update.emit(this.data);
    console.log('event emitted');
  }
  close()
  {
    this.closed.emit();
  }
}