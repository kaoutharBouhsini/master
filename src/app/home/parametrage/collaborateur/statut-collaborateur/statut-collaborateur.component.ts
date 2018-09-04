import { AddStatutCollaborateurDialogComponent } from './add-statut-collaborateur-dialog/add-statut-collaborateur-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ParamStatutCollaborateurService } from '../../../../services/param-statut-collaborateur.service';
import { Component, OnInit } from '@angular/core';
import { ParamStatutCollaborateur } from '../../../../beans/param-statut-collaborateur';
import { UpdateStatutCollaborateurDialogComponent } from './update-statut-collaborateur-dialog/update-statut-collaborateur-dialog.component';

@Component({
  selector: 'app-statut-collaborateur',
  templateUrl: './statut-collaborateur.component.html',
  styleUrls: ['./statut-collaborateur.component.css']
})
export class StatutCollaborateurComponent implements OnInit {


  statuts: ParamStatutCollaborateur[] = [];
  constructor(private paramStatutCollaborateurService: ParamStatutCollaborateurService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.gets();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddStatutCollaborateurDialogComponent, {
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

  store(statut: ParamStatutCollaborateur) {
    console.log('ADD statut '+statut.libelle)
    this.paramStatutCollaborateurService.add(statut).subscribe(_statut => this.statuts.push(_statut));
  }

  openSnackBar(nom: string, id: number) {
    let snackbarRef = this.snackBar.open("Confirmez la suppression de l'entité " + nom, "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }
  delete(id: number) {
    this.paramStatutCollaborateurService.delete(id).subscribe(() => this.gets());
  }

  gets() {
    this.paramStatutCollaborateurService.gets().subscribe(statuts => {
      this.statuts = statuts;
    });
  }
  openUpdateDialog(statut: ParamStatutCollaborateur) {
    const dialogRef = this.dialog.open(UpdateStatutCollaborateurDialogComponent, {
      hasBackdrop: true,
      data: statut,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.update.subscribe((statut: ParamStatutCollaborateur) => {
      this.update(statut);
      console.log('Update event ! - ' + statut.libelle);
      this.dialog.closeAll();
    });
  }

  update(statut: ParamStatutCollaborateur) {
    this.paramStatutCollaborateurService.update(statut.id, statut).subscribe();
  }

}
