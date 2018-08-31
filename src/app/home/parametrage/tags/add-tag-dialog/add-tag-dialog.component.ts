import { MAT_DIALOG_DATA } from '@angular/material';
import { Component,  Output, EventEmitter, Inject } from '@angular/core';
import { Tag } from '../../../../beans/tag';
@Component({
  selector: 'app-add-tag-dialog',
  templateUrl: './add-tag-dialog.component.html',
  styleUrls: ['./add-tag-dialog.component.css']
})
export class AddTagDialogComponent {

  @Output() add: EventEmitter<Tag> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: Tag[]) { }
  tag = new Tag();

  onSubmit() {
    this.add.emit(this.tag);
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