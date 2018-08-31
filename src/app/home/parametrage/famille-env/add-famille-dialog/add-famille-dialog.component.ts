import { RefFamilleEnvironnement } from './../../../../beans/ref_famille_environnement';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ParamEntite } from './../../../../beans/param_entite';
import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
@Component({
  selector: 'app-add-famille-dialog',
  templateUrl: './add-famille-dialog.component.html',
  styleUrls: ['./add-famille-dialog.component.css']
})
export class AddFamilleDialogComponent {
  @Output() add: EventEmitter<RefFamilleEnvironnement> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: RefFamilleEnvironnement[]) { }
  famille = new RefFamilleEnvironnement();

  onSubmit() {
    this.add.emit(this.famille);
    console.log('event emitted');
  }

  isUnique(famille: string)
  {
    return this.data.filter(it => it.name == famille).length ? false: true;
  }

  close()
  {
    this.closed.emit();
  }
}
