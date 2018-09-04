import { AddRealisationDialogComponent } from './add-realisation-dialog/add-realisation-dialog.component';
import { Component, OnInit } from '@angular/core';
import { RefRealisation } from '../../../../beans/ref_realisation';
import { RefRealisationService } from '../../../../services/ref-realisation.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { UpdateRealisationDialogComponent } from './update-realisation-dialog/update-realisation-dialog.component';

@Component({
  selector: 'app-param-realisation',
  templateUrl: './param-realisation.component.html',
  styleUrls: ['./param-realisation.component.css']
})
export class ParamRealisationComponent implements OnInit {

  realisations: RefRealisation[] = [];
  selectedItems: RefRealisation[] = [];
  nOrder: boolean = true;
  dOrder: boolean = false;
  selectTout: boolean = false;

  constructor(private realisationService: RefRealisationService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.gets();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddRealisationDialogComponent, {
      hasBackdrop: true,
      data: this.realisations,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.add.subscribe(realisation => {
      this.store(realisation);
      this.dialog.closeAll();
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());
  }

  store(realisation: RefRealisation) {
    console.log('ADD realisation '+realisation.name)
    this.realisationService.add(realisation).subscribe(_realisation => this.realisations.push(_realisation));
  }

  openSnackBar(nom: string, id: number) {
    let snackbarRef = this.snackBar.open("Confirmez la suppression de " + nom, "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }
  delete(id: number) {
    this.realisationService.delete(id).subscribe(() => this.gets());
  }

  gets() {
    this.realisationService.gets().subscribe(realisations => {
      this.realisations = realisations;
    });
  }
  openUpdateDialog(realisation: RefRealisation) {
    const dialogRef = this.dialog.open(UpdateRealisationDialogComponent, {
      hasBackdrop: true,
      data: realisation,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.update.subscribe((realisation: RefRealisation) => {
      this.update(realisation);
      console.log('Update event ! - ' + realisation.name);
      this.dialog.closeAll();
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());
  }

  update(realisation: RefRealisation) {
    this.realisationService.update(realisation.id, realisation).subscribe();
  }

  sortByName() {
    this.nOrder = !this.nOrder;
    this.realisations = this.realisations.sort((a: RefRealisation, b: RefRealisation) => {
      return this.nOrder ? ((a.name > b.name) ? 1 : -1) : ((a.name < b.name) ? 1 : -1);
    })
  }
  sortByDescription() {
    this.dOrder = !this.dOrder;
    this.realisations = this.realisations.sort((a: RefRealisation, b: RefRealisation) => {
      return this.dOrder ? ((a.description > b.description) ? 1 : -1) : ((a.description < b.description) ? 1 : -1);
    })
  }

  select(realisation: RefRealisation) {
    if (!this.selectedItems.includes(realisation))
      this.selectedItems.push(realisation);
    else {
      let index = this.selectedItems.indexOf(realisation);
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
      this.realisations.map((it) => this.selectedItems.push(it));
    }    

   // console.log(this.selectedItems);
  }

  isSelected(realisation: RefRealisation){
    return this.selectedItems.includes(realisation)
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
