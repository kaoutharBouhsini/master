import { RefFamilleEnvironnement } from './../../../../beans/ref_famille_environnement';
import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '../../../../../../node_modules/@angular/material';
@Component({
  selector: 'app-update-famille-dialog',
  templateUrl: './update-famille-dialog.component.html',
  styleUrls: ['./update-famille-dialog.component.css']
})
export class UpdateFamilleDialogComponent {

  @Output() update: EventEmitter<RefFamilleEnvironnement> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: RefFamilleEnvironnement) {}

  onSubmit() {
    this.update.emit(this.data);
    console.log('event emitted');
  }

  close()
  {
    this.closed.emit();
  }
}
