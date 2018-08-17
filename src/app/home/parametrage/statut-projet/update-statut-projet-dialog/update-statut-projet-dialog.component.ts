import { ParamStatutProjet } from './../../../../beans/param_statut_projet';
import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '../../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-update-statut-projet-dialog',
  templateUrl: './update-statut-projet-dialog.component.html',
  styleUrls: ['./update-statut-projet-dialog.component.css']
})
export class UpdateStatutProjetDialogComponent  {

  @Output() update: EventEmitter<ParamStatutProjet> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: ParamStatutProjet) {}

  onSubmit() {
    this.update.emit(this.data);
    console.log('event emitted');
  }

}
