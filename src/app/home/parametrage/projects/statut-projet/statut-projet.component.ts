import { ParamStatutProjetService } from '../../../../services/param-statut-projet.service';
import { AddStatutProjetDialogComponent } from './add-statut-projet-dialog/add-statut-projet-dialog.component';
import { ParamStatutProjet } from '../../../../beans/param_statut_projet';
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
  selectedItems: ParamStatutProjet[] = [];
  nOrder: boolean = true;
  dOrder: boolean = false;
  selectTout: boolean = false;

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
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());

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
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());

  }

  update(statut: ParamStatutProjet) {
    this.paramStatutProjetService.update(statut.id, statut).subscribe();
  }

  sortByName() {
    this.nOrder = !this.nOrder;
    this.statuts = this.statuts.sort((a: ParamStatutProjet, b: ParamStatutProjet) => {
      return this.nOrder ? ((a.name > b.name) ? 1 : -1) : ((a.name < b.name) ? 1 : -1);
    })
  }
  sortByDescription() {
    this.dOrder = !this.dOrder;
    this.statuts = this.statuts.sort((a: ParamStatutProjet, b: ParamStatutProjet) => {
      return this.dOrder ? ((a.description > b.description) ? 1 : -1) : ((a.description < b.description) ? 1 : -1);
    })
  }

  select(statut: ParamStatutProjet) {
    if (!this.selectedItems.includes(statut))
      this.selectedItems.push(statut);
    else {
      let index = this.selectedItems.indexOf(statut);
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
      this.statuts.map((it) => this.selectedItems.push(it));
    }    

   // console.log(this.selectedItems);
  }

  isSelected(statut: ParamStatutProjet){
    return this.selectedItems.includes(statut)
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
