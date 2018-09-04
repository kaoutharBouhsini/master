import { RolesTasksService } from '../../../../../services/roles-tasks.service';
import { RolesTaches } from '../../../../../beans/roles_taches';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, EventEmitter, Output, Inject, OnInit } from '@angular/core';
@Component({
  selector: 'app-update-role-task-dialog',
  templateUrl: './update-role-task-dialog.component.html',
  styleUrls: ['./update-role-task-dialog.component.css']
})
export class UpdateRoleTaskDialogComponent implements OnInit{

  @Output() update: EventEmitter<RolesTaches[]> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();
  @Output() deleted: EventEmitter<RolesTaches[]> = new EventEmitter();

  deletedItems: RolesTaches[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: RolesTaches[], private rolesTachesServices :RolesTasksService) {}
  ngOnInit()
  {
    console.log(this.data);
  }
  
  enregistrer() {
    this.persistDelete();
    console.log('event emitted');
    this.update.emit(this.data);
  }

  close()
  {
    this.closed.emit();
  }

  getSortedList()
  {
    return this.data.sort((a,b)=>{
      return (a.rank < b.rank)? 1:-1;
    });
  }

  delete(item: RolesTaches)
  {
    let index = this.data.indexOf(item);
    console.log('index : ' + index);
    this.data.splice(index, 1);
    this.deletedItems.push(item);
  }

  persistDelete()
  {
    if(this.deletedItems.length)
    {
      this.deletedItems.forEach(it => this.rolesTachesServices.delete(it.id).subscribe());
      this.deleted.emit(this.deletedItems);
    }
  }

  rangDown(item: RolesTaches)
  {
      --item.rank;
      let befIndex = this.data.indexOf(item) + 1;
      this.data[befIndex].rank++;

  }

  rangUp(item: RolesTaches)
  {
    ++item.rank;
    let aftIndex = this.data.indexOf(item) - 1;
    this.data[aftIndex].rank--;
  }

}