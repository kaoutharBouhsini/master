import { RefRealisation } from './../../../../beans/ref_realisation';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component,  Output, EventEmitter, Inject } from '@angular/core';
@Component({
  selector: 'app-add-realisation-dialog',
  templateUrl: './add-realisation-dialog.component.html',
  styleUrls: ['./add-realisation-dialog.component.css']
})
export class AddRealisationDialogComponent {

  @Output() add: EventEmitter<RefRealisation> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: RefRealisation[]) { }
  realisation = new RefRealisation();

  onSubmit() {
    this.add.emit(this.realisation);
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
