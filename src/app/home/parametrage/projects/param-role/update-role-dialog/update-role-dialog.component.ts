import { MAT_DIALOG_DATA } from '@angular/material';
import { Component,  EventEmitter, Output, Inject } from '@angular/core';
import { Role } from '../../../../../beans/roles';
@Component({
  selector: 'app-update-role-dialog',
  templateUrl: './update-role-dialog.component.html',
  styleUrls: ['./update-role-dialog.component.css']
})
export class UpdateRoleDialogComponent {

  @Output() update: EventEmitter<Role> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: Role) {}

  onSubmit() {
    this.update.emit(this.data);
    console.log('event emitted');
  }
  close()
  {
    this.closed.emit();
  }
}
