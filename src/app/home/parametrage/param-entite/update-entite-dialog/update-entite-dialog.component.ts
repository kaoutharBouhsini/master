import { ParamEntite } from './../../../../beans/param_entite';
import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '../../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-update-entite-dialog',
  templateUrl: './update-entite-dialog.component.html',
  styleUrls: ['./update-entite-dialog.component.css']
})
export class UpdateEntiteDialogComponent {

  @Output() update: EventEmitter<ParamEntite> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: ParamEntite) {}

  onSubmit() {
    this.update.emit(this.data);
    console.log('event emitted');
  }

}
