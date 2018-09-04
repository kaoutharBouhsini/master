import { UpdateTacheDialogComponent } from './update-tache-dialog/update-tache-dialog.component';
import { AddTacheDialogComponent } from './add-tache-dialog/add-tache-dialog.component';
import { TachesService } from '../../../../services/taches.service';
import { Tache } from '../../../../beans/taches';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {

  taches: Tache[] = [];
  selectedItems: Tache[] = [];
  nOrder: boolean = true;
  dOrder: boolean = false;
  selectTout: boolean = false;
  
  constructor(private tacheService: TachesService, public dialog: MatDialog, public snackBar: MatSnackBar) { }
  
  ngOnInit() {
    this.gets();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddTacheDialogComponent, {
      hasBackdrop: true,
      data: this.taches,
      panelClass: 'custom-modalbox',
      width: '40%'
    });
  
    dialogRef.componentInstance.add.subscribe(tache => {
      this.store(tache);
      this.dialog.closeAll();
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());
  
  }
  
  store(tache: Tache) {
    console.log('ADD tache '+tache.name)
    this.tacheService.add(tache).subscribe(_tache => this.taches.push(_tache));
  }
  
  openSnackBar(nom: string, id: number) {
    let snackbarRef = this.snackBar.open("Confirmez la suppression de " + nom, "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }
  delete(id: number) {
    this.tacheService.delete(id).subscribe(() => this.gets());
  }
  
  gets() {
    this.tacheService.gets().subscribe(taches => {
      this.taches = taches;
    });
  }
  openUpdateDialog(tache: Tache) {
    const dialogRef = this.dialog.open(UpdateTacheDialogComponent, {
      hasBackdrop: true,
      data: tache,
      panelClass: 'custom-modalbox',
      width: '40%'
    });
  
    dialogRef.componentInstance.update.subscribe((tache: Tache) => {
      this.update(tache);
      console.log('Update event ! - ' + tache.name);
      this.dialog.closeAll();
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());
  }
  
  update(tache: Tache) {
    this.tacheService.update(tache.id, tache).subscribe();
  }
  
  sortByName() {
    this.nOrder = !this.nOrder;
    this.taches = this.taches.sort((a: Tache, b: Tache) => {
      return this.nOrder ? ((a.name > b.name) ? 1 : -1) : ((a.name < b.name) ? 1 : -1);
    })
  }
  sortByDescription() {
    this.dOrder = !this.dOrder;
    this.taches = this.taches.sort((a: Tache, b: Tache) => {
      return this.dOrder ? ((a.description > b.description) ? 1 : -1) : ((a.description < b.description) ? 1 : -1);
    })
  }
  
  select(tache: Tache) {
    if (!this.selectedItems.includes(tache))
      this.selectedItems.push(tache);
    else {
      let index = this.selectedItems.indexOf(tache);
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
      this.taches.map((it) => this.selectedItems.push(it));
    }    
  
   // console.log(this.selectedItems);
  }
  
  isSelected(tache: Tache){
    return this.selectedItems.includes(tache)
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
