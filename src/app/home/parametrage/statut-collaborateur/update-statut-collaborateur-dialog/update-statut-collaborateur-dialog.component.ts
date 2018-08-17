import { ParamStatutCollaborateur } from './../../../../beans/param-statut-collaborateur';
import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '../../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-update-statut-collaborateur-dialog',
  templateUrl: './update-statut-collaborateur-dialog.component.html',
  styleUrls: ['./update-statut-collaborateur-dialog.component.css']
})
export class UpdateStatutCollaborateurDialogComponent {

  @Output() update: EventEmitter<ParamStatutCollaborateur> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: ParamStatutCollaborateur) {}

  onSubmit() {
    this.update.emit(this.data);
    console.log('event emitted');
  }

}
