import { MAT_DIALOG_DATA } from '@angular/material';
import { Component,  EventEmitter, Output, Inject } from '@angular/core';
import { RefFamillePJ } from '../../../../beans/ref_famille_PJ';
@Component({
  selector: 'app-update-famille-pj-dialog',
  templateUrl: './update-famille-pj-dialog.component.html',
  styleUrls: ['./update-famille-pj-dialog.component.css']
})
export class UpdateFamillePjDialogComponent {

  @Output() update: EventEmitter<RefFamillePJ> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: RefFamillePJ) {}

  onSubmit() {
    this.update.emit(this.data);
    console.log('event emitted');
  }
  close()
  {
    this.closed.emit();
  }
}