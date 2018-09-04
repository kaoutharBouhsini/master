import { MAT_DIALOG_DATA } from '@angular/material';
import { Component,  EventEmitter, Output, Inject } from '@angular/core';
import { RefRealisation } from '../../../../../beans/ref_realisation';
@Component({
  selector: 'app-update-realisation-dialog',
  templateUrl: './update-realisation-dialog.component.html',
  styleUrls: ['./update-realisation-dialog.component.css']
})
export class UpdateRealisationDialogComponent {

  @Output() update: EventEmitter<RefRealisation> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: RefRealisation) {}

  onSubmit() {
    this.update.emit(this.data);
    console.log('event emitted');
  }
  close()
  {
    this.closed.emit();
  }
}
