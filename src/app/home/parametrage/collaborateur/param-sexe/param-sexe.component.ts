import { AddSexeDialogComponent } from './add-sexe-dialog/add-sexe-dialog.component';
import { ParamSexe } from '../../../../beans/param-sexe';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ParamSexeService } from '../../../../services/param-sexe.service';
import { Component, OnInit } from '@angular/core';
import { UpdateSexeDialogComponent } from './update-sexe-dialog/update-sexe-dialog.component';

@Component({
  selector: 'app-param-sexe',
  templateUrl: './param-sexe.component.html',
  styleUrls: ['./param-sexe.component.css']
})
export class ParamSexeComponent implements OnInit {

  sexes: ParamSexe[] = [];
  selectedItems: ParamSexe[] = [];
  nOrder: boolean = true;
  dOrder: boolean = false;
  selectTout: boolean = false;

  constructor(private sexeService: ParamSexeService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

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
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());

  }

  store(sexe: ParamSexe) {
    console.log('ADD sexe '+sexe.libelle)
    this.sexeService.add(sexe).subscribe(_sexe => this.sexes.push(_sexe));
  }

  openSnackBar(nom: string, id: number) {
    let snackbarRef = this.snackBar.open("Confirmez la suppression du sexe " + nom, "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }
  delete(id: number) {
    this.sexeService.delete(id).subscribe(() => this.gets());
  }

  gets() {
    this.sexeService.gets().subscribe(sexes => {
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
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());

  }

  update(sexe: ParamSexe) {
    this.sexeService.update(sexe.id, sexe).subscribe();
  }

  sortByName() {
    this.nOrder = !this.nOrder;
    this.sexes = this.sexes.sort((a: ParamSexe, b: ParamSexe) => {
      return this.nOrder ? ((a.libelle > b.libelle) ? 1 : -1) : ((a.libelle < b.libelle) ? 1 : -1);
    })
  }
  sortByDescription() {
    this.dOrder = !this.dOrder;
    this.sexes = this.sexes.sort((a: ParamSexe, b: ParamSexe) => {
      return this.dOrder ? ((a.description > b.description) ? 1 : -1) : ((a.description < b.description) ? 1 : -1);
    })
  }

  select(sexe: ParamSexe) {
    if (!this.selectedItems.includes(sexe))
      this.selectedItems.push(sexe);
    else {
      let index = this.selectedItems.indexOf(sexe);
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
      this.sexes.map((it) => this.selectedItems.push(it));
    }    

   // console.log(this.selectedItems);
  }

  isSelected(sexe: ParamSexe){
    return this.selectedItems.includes(sexe)
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
