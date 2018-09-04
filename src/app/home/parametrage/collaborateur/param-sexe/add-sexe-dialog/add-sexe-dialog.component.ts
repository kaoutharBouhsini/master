import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ParamSexe } from '../../../../../beans/param-sexe';
@Component({
  selector: 'app-add-sexe-dialog',
  templateUrl: './add-sexe-dialog.component.html',
  styleUrls: ['./add-sexe-dialog.component.css']
})
export class AddSexeDialogComponent {
  @Output() add: EventEmitter<ParamSexe> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: ParamSexe[]) { }
  sexe = new ParamSexe();

  onSubmit() {
    this.add.emit(this.sexe);
    console.log('event emitted');
  }

  isUnique(sexe: string)
  {
    return this.data.filter(it => it.libelle == sexe).length ? false: true;
  }
  close()
  {
    this.closed.emit();
  }
}