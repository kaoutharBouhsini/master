import { Tag } from './../../../../beans/tag';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component,  EventEmitter, Output, Inject } from '@angular/core';

@Component({
  selector: 'app-update-tag-dialog',
  templateUrl: './update-tag-dialog.component.html',
  styleUrls: ['./update-tag-dialog.component.css']
})
export class UpdateTagDialogComponent {

  @Output() update: EventEmitter<Tag> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: Tag) {}

  onSubmit() {
    this.update.emit(this.data);
    console.log('event emitted');
  }
  close()
  {
    this.closed.emit();
  }
}