import { AddSecteurDialogComponent } from './add-secteur-dialog/add-secteur-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { SecteurService } from '../../../../services/secteur.service';
import { SecteurActivites } from '../../../../beans/secteurs_activites';
import { Component, OnInit } from '@angular/core';
import { UpdateSecteurDialogComponent } from './update-secteur-dialog/update-secteur-dialog.component';

@Component({
  selector: 'app-param-secteurs',
  templateUrl: './param-secteurs.component.html',
  styleUrls: ['./param-secteurs.component.css']
})
export class ParamSecteursComponent implements OnInit {

  secteurs: SecteurActivites[] = [];
  constructor(private secteursService: SecteurService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.gets();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddSecteurDialogComponent, {
      hasBackdrop: true,
      data: this.secteurs,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.add.subscribe(secteur => {
      this.store(secteur);
      this.dialog.closeAll();
    });
  }

  store(secteur: SecteurActivites) {
    console.log('ADD secteur '+secteur.name)
    this.secteursService.add(secteur).subscribe(_secteur => this.secteurs.push(_secteur));
  }

  openSnackBar(nom: string, id: number) {
    let snackbarRef = this.snackBar.open("Confirmez la suppression du secteur d'activité  " + nom, "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }
  delete(id: number) {
    this.secteursService.delete(id).subscribe(() => this.gets());
  }

  gets() {
    this.secteursService.gets().subscribe(secteurs => {
      this.secteurs = secteurs;
    });
  }
  openUpdateDialog(secteur: SecteurActivites) {
    const dialogRef = this.dialog.open(UpdateSecteurDialogComponent, {
      hasBackdrop: true,
      data: secteur,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.update.subscribe((secteur: SecteurActivites) => {
      this.update(secteur);
      console.log('Update event ! - ' + secteur.name);
      this.dialog.closeAll();
    });
  }

  update(secteur: SecteurActivites) {
    this.secteursService.update(secteur.id, secteur).subscribe();
  }
 
}
