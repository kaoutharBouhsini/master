import { ParamSituationFamiliale } from './../../../../beans/param-situation-familiale';
import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '../../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-update-situation-fam-dialog',
  templateUrl: './update-situation-fam-dialog.component.html',
  styleUrls: ['./update-situation-fam-dialog.component.css']
})
export class UpdateSituationFamDialogComponent {

  @Output() update: EventEmitter<ParamSituationFamiliale> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: ParamSituationFamiliale) {}

  onSubmit() {
    this.update.emit(this.data);
    console.log('event emitted');
  }
}
