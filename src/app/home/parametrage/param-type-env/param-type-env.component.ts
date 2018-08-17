import { MatDialog, MatSnackBar } from '@angular/material';
import { ParamTypeEnvService } from './../../../services/param-type-env.service';
import { ParamTypeEnvironnement } from './../../../beans/param_type_environnement';
import { AddTypeEnvDialogComponent } from './add-type-env-dialog/add-type-env-dialog.component';
import { Component, OnInit } from '@angular/core';
import { UpdateTypeEnvDialogComponent } from './update-type-env-dialog/update-type-env-dialog.component';

@Component({
  selector: 'app-param-type-env',
  templateUrl: './param-type-env.component.html',
  styleUrls: ['./param-type-env.component.css']
})
export class ParamTypeEnvComponent implements OnInit {

  typeEnvs: ParamTypeEnvironnement[] = [];
  constructor(private typeEnvService: ParamTypeEnvService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.gets();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddTypeEnvDialogComponent, {
      hasBackdrop: true,
      data: this.typeEnvs,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.add.subscribe(typeEnv => {
      this.store(typeEnv);
      this.dialog.closeAll();
    });
  }

  store(typeEnv: ParamTypeEnvironnement) {
    console.log('ADD typeEnv ');
    console.log(typeEnv);
    this.typeEnvService.add(typeEnv).subscribe(_typeEnv => this.typeEnvs.push(typeEnv));
  }

  openSnackBar(nom: string, id: number) {
    let snackbarRef = this.snackBar.open("Confirmez la suppression du Type " + nom, "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }
  delete(id: number) {
    this.typeEnvService.delete(id).subscribe(() => this.gets());
  }

  gets() {
    this.typeEnvService.gets().subscribe(typeEnvs => {
      this.typeEnvs = typeEnvs;
    });
  }
  openUpdateDialog(typeEnv: ParamTypeEnvironnement) {
    const dialogRef = this.dialog.open(UpdateTypeEnvDialogComponent, {
      hasBackdrop: true,
      data: typeEnv,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.update.subscribe((typeEnv: ParamTypeEnvironnement) => {
      this.update(typeEnv);
      console.log('Update event ! - ' + typeEnv.name);
      this.dialog.closeAll();
    });
  }

  update(typeEnv: ParamTypeEnvironnement) {
    this.typeEnvService.update(typeEnv.id, typeEnv).subscribe(() => this.gets());
  }
 
}
