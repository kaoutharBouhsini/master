import { AddRoleDialogComponent } from './add-role-dialog/add-role-dialog.component';
import { RolesService } from './../../../services/roles.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Role } from '../../../beans/roles';
import { UpdateRoleDialogComponent } from './update-role-dialog/update-role-dialog.component';

@Component({
  selector: 'app-param-role',
  templateUrl: './param-role.component.html',
  styleUrls: ['./param-role.component.css']
})
export class ParamRoleComponent implements OnInit {

  roles: Role[] = [];
  selectedItems: Role[] = [];
  nOrder: boolean = true;
  dOrder: boolean = false;
  selectTout: boolean = false;
  
  constructor(private roleService: RolesService, public dialog: MatDialog, public snackBar: MatSnackBar) { }
  
  ngOnInit() {
    this.gets();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddRoleDialogComponent, {
      hasBackdrop: true,
      data: this.roles,
      panelClass: 'custom-modalbox',
      width: '40%'
    });
  
    dialogRef.componentInstance.add.subscribe(role => {
      this.store(role);
      this.dialog.closeAll();
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());
  
  }
  
  store(role: Role) {
    console.log('ADD role '+role.name)
    this.roleService.add(role).subscribe(_role => this.roles.push(_role));
  }
  
  openSnackBar(nom: string, id: number) {
    let snackbarRef = this.snackBar.open("Confirmez la suppression de " + nom, "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }
  delete(id: number) {
    this.roleService.delete(id).subscribe(() => this.gets());
  }
  
  gets() {
    this.roleService.gets().subscribe(roles => {
      this.roles = roles;
    });
  }
  openUpdateDialog(role: Role) {
    const dialogRef = this.dialog.open(UpdateRoleDialogComponent, {
      hasBackdrop: true,
      data: role,
      panelClass: 'custom-modalbox',
      width: '40%'
    });
  
    dialogRef.componentInstance.update.subscribe((role: Role) => {
      this.update(role);
      console.log('Update event ! - ' + role.name);
      this.dialog.closeAll();
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());
  }
  
  update(role: Role) {
    this.roleService.update(role.id, role).subscribe();
  }
  
  sortByName() {
    this.nOrder = !this.nOrder;
    this.roles = this.roles.sort((a: Role, b: Role) => {
      return this.nOrder ? ((a.name > b.name) ? 1 : -1) : ((a.name < b.name) ? 1 : -1);
    })
  }
  sortByDescription() {
    this.dOrder = !this.dOrder;
    this.roles = this.roles.sort((a: Role, b: Role) => {
      return this.dOrder ? ((a.description > b.description) ? 1 : -1) : ((a.description < b.description) ? 1 : -1);
    })
  }
  
  select(role: Role) {
    if (!this.selectedItems.includes(role))
      this.selectedItems.push(role);
    else {
      let index = this.selectedItems.indexOf(role);
      console.log('index : ' + index);
      this.selectedItems.splice(index, 1);
      this.selectTout = false;
    }
    console.log(this.selectedItems);
  }
  
  selectAll() {
    this.selectedItems = [];
    if (this.selectTout)
    {
      this.selectedItems = [];
      this.roles.map((it) => this.selectedItems.push(it));
    }    
  
   // console.log(this.selectedItems);
  }
  
  isSelected(role: Role){
    return this.selectedItems.includes(role)
  }
  
  openDeleteSnackBar(){
    let snackbarRef = this.snackBar.open("Confirmez la suppression de éléments selectionnés ", "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => {
      this.selectedItems.map ( (it) => this.delete(it.id));
      this.selectedItems = [];
    });
  }
}
