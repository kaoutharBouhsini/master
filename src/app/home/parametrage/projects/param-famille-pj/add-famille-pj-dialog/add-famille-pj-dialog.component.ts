import { MAT_DIALOG_DATA } from '@angular/material';
import { Component,  Output, EventEmitter, Inject } from '@angular/core';
import { RefFamillePJ } from '../../../../../beans/ref_famille_PJ';
@Component({
  selector: 'app-add-famille-pj-dialog',
  templateUrl: './add-famille-pj-dialog.component.html',
  styleUrls: ['./add-famille-pj-dialog.component.css']
})
export class AddFamillePjDialogComponent {

  @Output() add: EventEmitter<RefFamillePJ> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: RefFamillePJ[]) { }
  famille = new RefFamillePJ();

  onSubmit() {
    this.add.emit(this.famille);
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