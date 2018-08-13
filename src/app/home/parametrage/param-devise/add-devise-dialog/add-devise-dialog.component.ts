import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-add-devise-dialog',
  templateUrl: './add-devise-dialog.component.html',
  styleUrls: ['./add-devise-dialog.component.css']
})
export class AddDeviseDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}


}
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}