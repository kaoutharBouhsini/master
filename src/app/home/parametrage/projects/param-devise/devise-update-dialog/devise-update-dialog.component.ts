import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { ParamDeviseProjet } from '../../../../../beans/param_devise_projet';

@Component({
  selector: 'app-devise-update-dialog',
  templateUrl: './devise-update-dialog.component.html',
  styleUrls: ['./devise-update-dialog.component.css']
})
export class DeviseUpdateDialogComponent{

  @Output() update: EventEmitter<ParamDeviseProjet> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: ParamDeviseProjet) {}

  onSubmit() {
    this.update.emit(this.data);
    console.log('event emitted');
  }

  close()
  {
    this.closed.emit();
  }
}
