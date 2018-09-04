import { ParamEntite } from './../../../../../beans/param_entite';
import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-entite-dialog',
  templateUrl: './add-entite-dialog.component.html',
  styleUrls: ['./add-entite-dialog.component.css']
})
export class AddEntiteDialogComponent {
  @Output() add: EventEmitter<ParamEntite> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: ParamEntite[]) { }
  entite = new ParamEntite();

  onSubmit() {
    this.add.emit(this.entite);
    console.log('event emitted');
  }

  isUnique(entite: string)
  {
    return this.data.filter(it => it.name == entite).length ? false: true;
  }
  close()
  {
    this.closed.emit();
  }
}
