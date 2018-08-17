import { AddFamilleDialogComponent } from './add-famille-dialog/add-famille-dialog.component';
import { RefFamilleEnvService } from './../../../services/ref-famille-env.service';
import { RefFamilleEnvironnement } from './../../../beans/ref_famille_environnement';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { UpdateFamilleDialogComponent } from './update-famille-dialog/update-famille-dialog.component';

@Component({
  selector: 'app-famille-env',
  templateUrl: './famille-env.component.html',
  styleUrls: ['./famille-env.component.css']
})
export class FamilleEnvComponent implements OnInit {

  familles: RefFamilleEnvironnement[] = [];
  constructor(private RefFamilleEnvService: RefFamilleEnvService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.gets();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddFamilleDialogComponent, {
      hasBackdrop: true,
      data: this.familles,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.add.subscribe(famille => {
      this.store(famille);
      this.dialog.closeAll();
    });
  }

  store(famille: RefFamilleEnvironnement) {
    console.log('ADD famille '+famille.name)
    this.RefFamilleEnvService.add(famille).subscribe(_famille => this.familles.push(_famille));
  }

  openSnackBar(nom: string, id: number) {
    let snackbarRef = this.snackBar.open("Confirmez la suppression de la famille " + nom, "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }
  delete(id: number) {
    this.RefFamilleEnvService.delete(id).subscribe(() => this.gets());
  }

  gets() {
    this.RefFamilleEnvService.gets().subscribe(familles => {
      this.familles = familles;
    });
  }
  openUpdateDialog(famille: RefFamilleEnvironnement) {
    const dialogRef = this.dialog.open(UpdateFamilleDialogComponent, {
      hasBackdrop: true,
      data: famille,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.update.subscribe((famille: RefFamilleEnvironnement) => {
      this.update(famille);
      console.log('Update event ! - ' + famille.name);
      this.dialog.closeAll();
    });
  }

  update(famille: RefFamilleEnvironnement) {
    this.RefFamilleEnvService.update(famille.id, famille).subscribe();
  }

}
