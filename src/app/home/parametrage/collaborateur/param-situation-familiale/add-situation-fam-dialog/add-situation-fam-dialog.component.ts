import { ParamSituationFamiliale } from '../../../../../beans/param-situation-familiale';
import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-add-situation-fam-dialog',
  templateUrl: './add-situation-fam-dialog.component.html',
  styleUrls: ['./add-situation-fam-dialog.component.css']
})
export class AddSituationFamDialogComponent{
  @Output() add: EventEmitter<ParamSituationFamiliale> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: ParamSituationFamiliale[]) { }
  situation = new ParamSituationFamiliale();

  onSubmit() {
    this.add.emit(this.situation);
    console.log('event emitted');
  }

  isUnique(situation: string)
  {
    return this.data.filter(it => it.libelle == situation).length ? false: true;
  }
  close()
  {
    this.closed.emit();
  }
}
