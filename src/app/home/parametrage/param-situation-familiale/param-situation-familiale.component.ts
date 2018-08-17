import { ParamSituationFamilialeService } from './../../../services/param-situation-familiale.service';
import { AddSituationFamDialogComponent } from './add-situation-fam-dialog/add-situation-fam-dialog.component';
import { ParamSituationFamiliale } from './../../../beans/param-situation-familiale';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { UpdateSituationFamDialogComponent } from './update-situation-fam-dialog/update-situation-fam-dialog.component';
@Component({
  selector: 'app-param-situation-familiale',
  templateUrl: './param-situation-familiale.component.html',
  styleUrls: ['./param-situation-familiale.component.css']
})
export class ParamSituationFamilialeComponent implements OnInit {

  situations: ParamSituationFamiliale[] = [];
  constructor(private paramSituationFamilialeService: ParamSituationFamilialeService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.gets();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddSituationFamDialogComponent, {
      hasBackdrop: true,
      data: this.situations,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.add.subscribe(situation => {
      this.store(situation);
      this.dialog.closeAll();
    });
  }

  store(situation: ParamSituationFamiliale) {
    console.log('ADD situation '+situation.libelle)
    this.paramSituationFamilialeService.add(situation).subscribe(_situation => this.situations.push(_situation));
  }

  openSnackBar(nom: string, id: number) {
    let snackbarRef = this.snackBar.open("Confirmez la suppression de l'entité " + nom, "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }
  delete(id: number) {
    this.paramSituationFamilialeService.delete(id).subscribe(() => this.gets());
  }

  gets() {
    this.paramSituationFamilialeService.gets().subscribe(situations => {
      this.situations = situations;
    });
  }
  openUpdateDialog(situation: ParamSituationFamiliale) {
    const dialogRef = this.dialog.open(UpdateSituationFamDialogComponent, {
      hasBackdrop: true,
      data: situation,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.update.subscribe((situation: ParamSituationFamiliale) => {
      this.update(situation);
      console.log('Update event ! - ' + situation.libelle);
      this.dialog.closeAll();
    });
  }

  update(situation: ParamSituationFamiliale) {
    this.paramSituationFamilialeService.update(situation.id, situation).subscribe();
  }
}
