import { Component,  Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ParamStatutProjet } from '../../../../beans/param_statut_projet';

@Component({
  selector: 'app-add-statut-projet-dialog',
  templateUrl: './add-statut-projet-dialog.component.html',
  styleUrls: ['./add-statut-projet-dialog.component.css']
})
export class AddStatutProjetDialogComponent {
  @Output() add: EventEmitter<ParamStatutProjet> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: ParamStatutProjet[]) { }
  statut = new ParamStatutProjet();

  onSubmit() {
    this.add.emit(this.statut);
    console.log('event emitted');
  }

  isUnique(statut: string)
  {
    return this.data.filter(it => it.name == statut).length ? false: true;
  }
  close()
  {
    this.closed.emit();
  }
}