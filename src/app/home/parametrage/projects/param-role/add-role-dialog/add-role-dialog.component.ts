import { Role } from '../../../../../beans/roles';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component,  Output, EventEmitter, Inject } from '@angular/core';
@Component({
  selector: 'app-add-role-dialog',
  templateUrl: './add-role-dialog.component.html',
  styleUrls: ['./add-role-dialog.component.css']
})
export class AddRoleDialogComponent {

  @Output() add: EventEmitter<Role> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: Role[]) { }
  role = new Role();

  onSubmit() {
    this.add.emit(this.role);
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