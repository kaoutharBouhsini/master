import { RolesTaches } from './../../../beans/roles_taches';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { RolesTasksService } from '../../../services/roles-tasks.service';
@Component({
  selector: 'app-role-taches',
  templateUrl: './role-taches.component.html',
  styleUrls: ['./role-taches.component.css']
})
export class RolerolesTachesComponent implements OnInit {

  rolesTaches: RolesTaches[] = [];
  selectedItems: RolesTaches[] = [];
  nOrder: boolean = true;
  dOrder: boolean = false;
  selectTout: boolean = false;
  
  constructor(private rolesTacheservice: RolesTasksService, public dialog: MatDialog, public snackBar: MatSnackBar) { }
  
  ngOnInit() {
    this.gets();
  }
  openDialog() {
    /*const dialogRef = this.dialog.open(AddRolesTachesDialogComponent, {
      hasBackdrop: true,
      data: this.rolesTaches,
      panelClass: 'custom-modalbox',
      width: '40%'
    });
  
    dialogRef.componentInstance.add.subscribe(RolesTaches => {
      this.store(RolesTaches);
      this.dialog.closeAll();
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());
  */
  }
  
  store(RolesTaches: RolesTaches) {
    this.rolesTacheservice.add(RolesTaches).subscribe(_RolesTaches => this.rolesTaches.push(_RolesTaches));
  }
  
  openSnackBar(nom: string, id: number) {
    let snackbarRef = this.snackBar.open("Confirmez la suppression de " + nom, "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }
  delete(id: number) {
    this.rolesTacheservice.delete(id).subscribe(() => this.gets());
  }
  
  gets() {
    this.rolesTacheservice.gets().subscribe(rolesTaches => {
      this.rolesTaches = rolesTaches;
    });
  }
  openUpdateDialog(RolesTaches: RolesTaches) {
   /* const dialogRef = this.dialog.open(UpdateRolesTachesDialogComponent, {
      hasBackdrop: true,
      data: RolesTaches,
      panelClass: 'custom-modalbox',
      width: '40%'
    });
  
    dialogRef.componentInstance.update.subscribe((RolesTaches: RolesTaches) => {
      this.update(RolesTaches);
      console.log('Update event ! - ' + RolesTaches.name);
      this.dialog.closeAll();
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());
    */
  }
  
  update(RolesTaches: RolesTaches) {
    this.rolesTacheservice.update(RolesTaches.id, RolesTaches).subscribe();
  }
  
  sortByName() {
    this.nOrder = !this.nOrder;
    this.rolesTaches = this.rolesTaches.sort((a: RolesTaches, b: RolesTaches) => {
      return this.nOrder ? ((a.role.name > b.role.name) ? 1 : -1) : ((a.role.name < b.role.name) ? 1 : -1);
    })
  }
 
  
  select(RolesTaches: RolesTaches) {
    if (!this.selectedItems.includes(RolesTaches))
      this.selectedItems.push(RolesTaches);
    else {
      let index = this.selectedItems.indexOf(RolesTaches);
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
      this.rolesTaches.map((it) => this.selectedItems.push(it));
    }    
  
   // console.log(this.selectedItems);
  }
  
  isSelected(RolesTaches: RolesTaches){
    return this.selectedItems.includes(RolesTaches)
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
