import { AddEntiteDialogComponent } from './add-entite-dialog/add-entite-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ParamEntiteService } from './../../../services/param-entite.service';
import { Component, OnInit } from '@angular/core';
import { ParamEntite } from '../../../beans/param_entite';
import { UpdateEntiteDialogComponent } from './update-entite-dialog/update-entite-dialog.component';

@Component({
  selector: 'app-param-entite',
  templateUrl: './param-entite.component.html',
  styleUrls: ['./param-entite.component.css']
})
export class ParamEntiteComponent implements OnInit {

  entites: ParamEntite[] = [];
  constructor(private paramEntiteService: ParamEntiteService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.gets();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddEntiteDialogComponent, {
      hasBackdrop: true,
      data: this.entites,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.add.subscribe(entite => {
      this.store(entite);
      this.dialog.closeAll();
    });
  }

  store(entite: ParamEntite) {
    console.log('ADD ENTITE '+entite.name)
    this.paramEntiteService.add(entite).subscribe(_entite => this.entites.push(_entite));
  }

  openSnackBar(nom: string, id: number) {
    let snackbarRef = this.snackBar.open("Confirmez la suppression de l'entité " + nom, "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }
  delete(id: number) {
    this.paramEntiteService.delete(id).subscribe(() => this.gets());
  }

  gets() {
    this.paramEntiteService.gets().subscribe(entites => {
      this.entites = entites;
    });
  }
  openUpdateDialog(entite: ParamEntite) {
    const dialogRef = this.dialog.open(UpdateEntiteDialogComponent, {
      hasBackdrop: true,
      data: entite,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.update.subscribe((entite: ParamEntite) => {
      this.update(entite);
      console.log('Update event ! - ' + entite.name);
      this.dialog.closeAll();
    });
  }

  update(entite: ParamEntite) {
    this.paramEntiteService.update(entite.id, entite).subscribe();
  }
}
