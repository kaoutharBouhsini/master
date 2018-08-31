import { Tache } from './../../../../beans/taches';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component,  EventEmitter, Output, Inject } from '@angular/core';
@Component({
  selector: 'app-update-tache-dialog',
  templateUrl: './update-tache-dialog.component.html',
  styleUrls: ['./update-tache-dialog.component.css']
})
export class UpdateTacheDialogComponent {

  @Output() update: EventEmitter<Tache> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: Tache) {}

  onSubmit() {
    this.update.emit(this.data);
    console.log('event emitted');
  }
  close()
  {
    this.closed.emit();
  }
}