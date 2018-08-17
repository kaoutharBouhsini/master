import { ParamStatutProjetService } from './../../../services/param-statut-projet.service';
import { AddStatutProjetDialogComponent } from './add-statut-projet-dialog/add-statut-projet-dialog.component';
import { ParamStatutProjet } from './../../../beans/param_statut_projet';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { UpdateStatutProjetDialogComponent } from './update-statut-projet-dialog/update-statut-projet-dialog.component';

@Component({
  selector: 'app-statut-projet',
  templateUrl: './statut-projet.component.html',
  styleUrls: ['./statut-projet.component.css']
})
export class StatutProjetComponent implements OnInit {


  statuts: ParamStatutProjet[] = [];
  constructor(private paramStatutProjetService: ParamStatutProjetService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.gets();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddStatutProjetDialogComponent, {
      hasBackdrop: true,
      data: this.statuts,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.add.subscribe(statut => {
      this.store(statut);
      this.dialog.closeAll();
    });
  }

  store(statut: ParamStatutProjet) {
    console.log('ADD statut '+statut.name)
    this.paramStatutProjetService.add(statut).subscribe(_statut => this.statuts.push(_statut));
  }

  openSnackBar(nom: string, id: number) {
    let snackbarRef = this.snackBar.open("Confirmez la suppression de l'entité " + nom, "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }
  delete(id: number) {
    this.paramStatutProjetService.delete(id).subscribe(() => this.gets());
  }

  gets() {
    this.paramStatutProjetService.gets().subscribe(statuts => {
      this.statuts = statuts;
    });
  }
  openUpdateDialog(statut: ParamStatutProjet) {
    const dialogRef = this.dialog.open(UpdateStatutProjetDialogComponent, {
      hasBackdrop: true,
      data: statut,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.update.subscribe((statut: ParamStatutProjet) => {
      this.update(statut);
      console.log('Update event ! - ' + statut.name);
      this.dialog.closeAll();
    });
  }

  update(statut: ParamStatutProjet) {
    this.paramStatutProjetService.update(statut.id, statut).subscribe();
  }

}
