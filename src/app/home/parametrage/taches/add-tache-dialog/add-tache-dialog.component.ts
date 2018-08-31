import { Tache } from './../../../../beans/taches';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component,  Output, EventEmitter, Inject } from '@angular/core';
@Component({
  selector: 'app-add-tache-dialog',
  templateUrl: './add-tache-dialog.component.html',
  styleUrls: ['./add-tache-dialog.component.css']
})
export class AddTacheDialogComponent  {

  @Output() add: EventEmitter<Tache> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: Tache[]) { }
  tache = new Tache();

  onSubmit() {
    this.add.emit(this.tache);
    console.log('event emitted');
  }

  isUnique(type: string)
  {
    return this.data.filter(it => it.name == type).length ? false: true;
  }

  close()
  {
    this.closed.emit();
  }
}