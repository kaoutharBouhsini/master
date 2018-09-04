import { Role } from '../../../../../beans/roles';
import { RolesService } from '../../../../../services/roles.service';
import { Tache } from '../../../../../beans/taches';
import { filter } from 'rxjs/operators';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { RolesTaches } from '../../../../../beans/roles_taches';
import { Observable } from '../../../../../../../node_modules/rxjs';
import { TachesService } from '../../../../../services/taches.service';
import { FormControl } from '../../../../../../../node_modules/@angular/forms';
@Component({
  selector: 'app-add-role-task-dialog',
  templateUrl: './add-role-task-dialog.component.html',
  styleUrls: ['./add-role-task-dialog.component.css']
})
export class AddRoleTaskDialogComponent implements OnInit {

  @Output() add: EventEmitter<RolesTaches[]> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  roles$: Observable<Role[]>;
  taches$: Observable<Tache[]>;
  role = new Role();
  rolesTaches: RolesTaches[] = [];
  tachesCtrl = new FormControl();
  initialRank: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: RolesTaches[], private rolesService: RolesService, private tachesServices: TachesService) { }

  ngOnInit() {
    this.roles$ = this.rolesService.gets();
    this.taches$ = this.tachesServices.gets();
  }

  onChange() {
    this.initialRank = this.data.filter(it => it.role.id == this.role.id).length;
  }

  onSubmit() {
    this.tachesCtrl.value.map((it) => {
      let roleTache: RolesTaches = new RolesTaches();
      roleTache.role = new Role();
      this.rolesService.get(this.role.id).subscribe((role) => roleTache.role = role );
      roleTache.taches = it;
      roleTache.rank = ++this.initialRank;
      this.rolesTaches.push(roleTache);
    });
    //console.log(this.rolesTaches);
    console.log('event emitted');
    this.add.emit(this.rolesTaches);
  }

  close() {
    this.closed.emit();
  }

  isExist(role_id: number, task_id: number) {
    return this.data.filter(it => it.role!!.id == role_id && it.taches!!.id == task_id).length ? true : false;
  }

}
