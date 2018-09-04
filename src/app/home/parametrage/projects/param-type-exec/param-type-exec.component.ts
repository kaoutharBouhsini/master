import { AddTypeExecDialogComponent } from './add-type-exec-dialog/add-type-exec-dialog.component';
import { ParamTypeExecProjetService } from '../../../../services/param-type-exec-projet.service';
import { ParamTypeExecutionProjet } from '../../../../beans/param_type_execution_projet';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { UpdateTypeExecDialogComponent } from './update-type-exec-dialog/update-type-exec-dialog.component';

@Component({
  selector: 'app-param-type-exec',
  templateUrl: './param-type-exec.component.html',
  styleUrls: ['./param-type-exec.component.css']
})
export class ParamTypeExecComponent implements OnInit {

  typeExecs: ParamTypeExecutionProjet[] = [];
  selectedItems: ParamTypeExecutionProjet[] = [];
  nOrder: boolean = true;
  dOrder: boolean = false;
  selectTout: boolean = false;

  constructor(private typeExecService: ParamTypeExecProjetService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.gets();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddTypeExecDialogComponent, {
      hasBackdrop: true,
      data: this.typeExecs,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.add.subscribe(typeExec => {
      this.store(typeExec);
      this.dialog.closeAll();
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());

  }

  store(typeExec: ParamTypeExecutionProjet) {
    console.log('ADD typeExec '+typeExec.name)
    this.typeExecService.add(typeExec).subscribe(_typeExec => this.typeExecs.push(_typeExec));
  }

  openSnackBar(nom: string, id: number) {
    let snackbarRef = this.snackBar.open("Confirmez la suppression du Type " + nom, "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }
  delete(id: number) {
    this.typeExecService.delete(id).subscribe(() => this.gets());
  }

  gets() {
    this.typeExecService.gets().subscribe(typeExecs => {
      this.typeExecs = typeExecs;
    });
  }
  openUpdateDialog(typeExec: ParamTypeExecutionProjet) {
    const dialogRef = this.dialog.open(UpdateTypeExecDialogComponent, {
      hasBackdrop: true,
      data: typeExec,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.update.subscribe((typeExec: ParamTypeExecutionProjet) => {
      this.update(typeExec);
      console.log('Update event ! - ' + typeExec.name);
      this.dialog.closeAll();
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());

  }

  update(typeExec: ParamTypeExecutionProjet) {
    this.typeExecService.update(typeExec.id, typeExec).subscribe();
  }

  sortByName() {
    this.nOrder = !this.nOrder;
    this.typeExecs = this.typeExecs.sort((a: ParamTypeExecutionProjet, b: ParamTypeExecutionProjet) => {
      return this.nOrder ? ((a.name > b.name) ? 1 : -1) : ((a.name < b.name) ? 1 : -1);
    })
  }
  sortByDescription() {
    this.dOrder = !this.dOrder;
    this.typeExecs = this.typeExecs.sort((a: ParamTypeExecutionProjet, b: ParamTypeExecutionProjet) => {
      return this.dOrder ? ((a.description > b.description) ? 1 : -1) : ((a.description < b.description) ? 1 : -1);
    })
  }

  select(typeExec: ParamTypeExecutionProjet) {
    if (!this.selectedItems.includes(typeExec))
      this.selectedItems.push(typeExec);
    else {
      let index = this.selectedItems.indexOf(typeExec);
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
      this.typeExecs.map((it) => this.selectedItems.push(it));
    }    

   // console.log(this.selectedItems);
  }

  isSelected(typeExec: ParamTypeExecutionProjet){
    return this.selectedItems.includes(typeExec)
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
