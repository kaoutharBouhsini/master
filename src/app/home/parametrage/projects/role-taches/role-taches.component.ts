import { UpdateRoleTaskDialogComponent } from './update-role-task-dialog/update-role-task-dialog.component';
import { AddRoleTaskDialogComponent } from './add-role-task-dialog/add-role-task-dialog.component';
import { RolesTaches } from '../../../../beans/roles_taches';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { RolesTasksService } from '../../../../services/roles-tasks.service';
import { Role } from '../../../../beans/roles';
import { element } from '../../../../../../node_modules/protractor';
@Component({
  selector: 'app-role-taches',
  templateUrl: './role-taches.component.html',
  styleUrls: ['./role-taches.component.css']
})
export class RoleTachesComponent implements OnInit {

  rolesTaches: RolesTaches[] = [];
  selectedItems: RolesTaches[] = [];
  nOrder: boolean = true;
  dOrder: boolean = false;
  selectTout: boolean = false;
  roles: Role[] = [];
  
  constructor(private rolesTacheservice: RolesTasksService, public dialog: MatDialog, public snackBar: MatSnackBar) { }
  
  ngOnInit() {
    this.gets();
}
  openDialog() {
    const dialogRef = this.dialog.open(AddRoleTaskDialogComponent, {
      hasBackdrop: true,
      data: this.rolesTaches,
      panelClass: 'custom-modalbox',
      width: '40%'
    });
  
    dialogRef.componentInstance.add.subscribe((rolesTaches: RolesTaches[]) => {
      this.store(rolesTaches);
      this.dialog.closeAll();
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());
  
  }
  
  getRoles(){
      this.rolesTaches.map((it) => {
          if(!this.contains(it.role.id))
            this.roles.push(it.role);
      });
      return this.roles;
  }

  contains(role:number){
    return this.roles.filter(it => it.id == role).length ? true : false;
  }

  getTachesByRole(role_id: number){
    return this.rolesTaches.filter((it) => it.role.id == role_id).sort((a,b)=>{
      return (a.rank < b.rank)? 1:-1;
    });
  }

  store(rolesTaches: RolesTaches[]) {
    console.log('store method');
    rolesTaches.forEach(rolesTache => {
      this.rolesTacheservice.add(rolesTache).subscribe(_RolesTaches => this.rolesTaches.push(_RolesTaches));
    });
  }
  
  openSnackBar(nom: string, id: number) {
    let snackbarRef = this.snackBar.open("Confirmez la suppression de " + nom, "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }

  delete(id: number) {
    this.getTachesByRole(id).forEach(rolesTache => {
    this.rolesTacheservice.delete(rolesTache.id).subscribe(() => this.gets());
  });
}
  gets() {
    this.rolesTacheservice.gets().subscribe(rolesTaches => {
      this.rolesTaches = rolesTaches;
      console.log(this.rolesTaches);
    });
  }
  openUpdateDialog(rolesTaches: RolesTaches[]) {
    const dialogRef = this.dialog.open(UpdateRoleTaskDialogComponent, {
      hasBackdrop: true,
      data: rolesTaches,
      panelClass: 'custom-modalbox',
      width: '35%'
    });
  
    dialogRef.componentInstance.update.subscribe((rolesTaches: RolesTaches[]) => {
      this.update(rolesTaches);
      this.dialog.closeAll();
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());
    dialogRef.componentInstance.deleted.subscribe((rolesTaches: RolesTaches[]) => this.spliceAll(rolesTaches));
    
  }

  spliceAll(rolesTaches: RolesTaches[])
  {
    rolesTaches.forEach(element =>{
      let index = this.rolesTaches.indexOf(element);
      this.rolesTaches.splice(index, 1);
    });
  }
  
  update(rolesTaches: RolesTaches[]) {
    console.log('update method');
    console.log(rolesTaches);
    rolesTaches.forEach(rolesTache => {
      this.rolesTacheservice.update(rolesTache.id,rolesTache).subscribe();
    });
  }

  sortByName() {
    this.nOrder = !this.nOrder;
    this.rolesTaches = this.rolesTaches.sort((a: RolesTaches, b: RolesTaches) => {
      return this.nOrder ? ((a.role.name > b.role.name) ? 1 : -1) : ((a.role.name < b.role.name) ? 1 : -1);
    })
  }
 
  
  select(role: Role) {
    let roleTaches = this.rolesTaches.filter(it => it.role == role);

    this.rolesTaches.map((roleTache) => {
          if (!this.selectedItems.includes(roleTache))
          this.selectedItems.push(roleTache);
        else {
          let index = this.selectedItems.indexOf(roleTache);
          console.log('index : ' + index);
          this.selectedItems.splice(index, 1);
          this.selectTout = false;
        }
    });
    console.log(this.selectedItems);
  }
  
  selectAll() {
    this.selectedItems = [];
    if (this.selectTout)
    {
      this.selectedItems = [];
      this.rolesTaches.map((it) => this.selectedItems.push(it));
    }    
  
    console.log(this.selectedItems);
  }
  
  isSelected(role: Role){
    let roleTaches = this.rolesTaches.filter(it => it.role == role);
    return this.rolesTaches.filter(it => this.selectedItems.includes(it)).length ? true:false;
  }
  
  openDeleteSnackBar(){
    this.roles = [];
    let snackbarRef = this.snackBar.open("Confirmez la suppression de éléments selectionnés ", "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => {
      this.selectedItems.map ( (it) => this.delete(it.id));
      this.selectedItems = [];
    });
  }
}
