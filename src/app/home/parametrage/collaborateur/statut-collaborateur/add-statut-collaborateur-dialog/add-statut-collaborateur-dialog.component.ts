import { Component,  Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ParamStatutCollaborateur } from '../../../../../beans/param-statut-collaborateur';
@Component({
  selector: 'app-add-statut-collaborateur-dialog',
  templateUrl: './add-statut-collaborateur-dialog.component.html',
  styleUrls: ['./add-statut-collaborateur-dialog.component.css']
})
export class AddStatutCollaborateurDialogComponent {
  @Output() add: EventEmitter<ParamStatutCollaborateur> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: ParamStatutCollaborateur[]) { }
  statut = new ParamStatutCollaborateur();

  onSubmit() {
    this.add.emit(this.statut);
    console.log('event emitted');
  }

  isUnique(statut: string)
  {
    return this.data.filter(it => it.libelle == statut).length ? false: true;
  }
}
