import { AddTypeExecDialogComponent } from './add-type-exec-dialog/add-type-exec-dialog.component';
import { ParamTypeExecProjetService } from './../../../services/param-type-exec-projet.service';
import { ParamTypeExecutionProjet } from './../../../beans/param_type_execution_projet';
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
  }

  update(typeExec: ParamTypeExecutionProjet) {
    this.typeExecService.update(typeExec.id, typeExec).subscribe();
  }

}
