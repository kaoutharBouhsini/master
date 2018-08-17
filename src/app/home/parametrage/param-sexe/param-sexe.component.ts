import { AddSexeDialogComponent } from './add-sexe-dialog/add-sexe-dialog.component';
import { ParamSexe } from './../../../beans/param-sexe';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ParamSexeService } from './../../../services/param-sexe.service';
import { Component, OnInit } from '@angular/core';
import { UpdateSexeDialogComponent } from './update-sexe-dialog/update-sexe-dialog.component';

@Component({
  selector: 'app-param-sexe',
  templateUrl: './param-sexe.component.html',
  styleUrls: ['./param-sexe.component.css']
})
export class ParamSexeComponent implements OnInit {

  sexes: ParamSexe[] = [];
  constructor(private ParamSexeService: ParamSexeService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.gets();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddSexeDialogComponent, {
      hasBackdrop: true,
      data: this.sexes,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.add.subscribe(sexe => {
      this.store(sexe);
      this.dialog.closeAll();
    });
  }

  store(sexe: ParamSexe) {
    console.log('ADD sexe '+sexe.libelle)
    this.ParamSexeService.add(sexe).subscribe(_sexe => this.sexes.push(_sexe));
  }

  openSnackBar(nom: string, id: number) {
    let snackbarRef = this.snackBar.open("Confirmez la suppression du sexe " + nom, "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }
  delete(id: number) {
    this.ParamSexeService.delete(id).subscribe(() => this.gets());
  }

  gets() {
    this.ParamSexeService.gets().subscribe(sexes => {
      this.sexes = sexes;
    });
  }
  openUpdateDialog(sexe: ParamSexe) {
    const dialogRef = this.dialog.open(UpdateSexeDialogComponent, {
      hasBackdrop: true,
      data: sexe,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.update.subscribe((sexe: ParamSexe) => {
      this.update(sexe);
      console.log('Update event ! - ' + sexe.libelle);
      this.dialog.closeAll();
    });
  }

  update(sexe: ParamSexe) {
    this.ParamSexeService.update(sexe.id, sexe).subscribe();
  }
}
