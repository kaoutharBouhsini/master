import { AddEntiteDialogComponent } from './add-entite-dialog/add-entite-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ParamEntiteService } from '../../../../services/param-entite.service';
import { Component, OnInit } from '@angular/core';
import { ParamEntite } from '../../../../beans/param_entite';
import { UpdateEntiteDialogComponent } from './update-entite-dialog/update-entite-dialog.component';

@Component({
  selector: 'app-param-entite',
  templateUrl: './param-entite.component.html',
  styleUrls: ['./param-entite.component.css']
})
export class ParamEntiteComponent implements OnInit {

  entites: ParamEntite[] = [];
  selectedItems: ParamEntite[] = [];
  nOrder: boolean = true;
  dOrder: boolean = false;
  selectTout: boolean = false;

  constructor(private entiteService: ParamEntiteService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

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
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());

  }

  store(entite: ParamEntite) {
    console.log('ADD entite '+entite.name)
    this.entiteService.add(entite).subscribe(_entite => this.entites.push(_entite));
  }

  openSnackBar(nom: string, id: number) {
    let snackbarRef = this.snackBar.open("Confirmez la suppression de l'entité " + nom, "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }
  delete(id: number) {
    this.entiteService.delete(id).subscribe(() => this.gets());
  }

  gets() {
    this.entiteService.gets().subscribe(entites => {
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
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());

  }

  update(entite: ParamEntite) {
    this.entiteService.update(entite.id, entite).subscribe();
  }

  sortByName() {
    this.nOrder = !this.nOrder;
    this.entites = this.entites.sort((a: ParamEntite, b: ParamEntite) => {
      return this.nOrder ? ((a.name > b.name) ? 1 : -1) : ((a.name < b.name) ? 1 : -1);
    })
  }
  sortByDescription() {
    this.dOrder = !this.dOrder;
    this.entites = this.entites.sort((a: ParamEntite, b: ParamEntite) => {
      return this.dOrder ? ((a.description > b.description) ? 1 : -1) : ((a.description < b.description) ? 1 : -1);
    })
  }

  select(entite: ParamEntite) {
    if (!this.selectedItems.includes(entite))
      this.selectedItems.push(entite);
    else {
      let index = this.selectedItems.indexOf(entite);
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
      this.entites.map((it) => this.selectedItems.push(it));
    }    

   // console.log(this.selectedItems);
  }

  isSelected(entite: ParamEntite){
    return this.selectedItems.includes(entite)
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
