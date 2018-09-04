import { ParamSituationFamilialeService } from '../../../../services/param-situation-familiale.service';
import { AddSituationFamDialogComponent } from './add-situation-fam-dialog/add-situation-fam-dialog.component';
import { ParamSituationFamiliale } from '../../../../beans/param-situation-familiale';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { UpdateSituationFamDialogComponent } from './update-situation-fam-dialog/update-situation-fam-dialog.component';
@Component({
  selector: 'app-param-situation-familiale',
  templateUrl: './param-situation-familiale.component.html',
  styleUrls: ['./param-situation-familiale.component.css']
})
export class ParamSituationFamilialeComponent implements OnInit {

  situations: ParamSituationFamiliale[] = [];
  selectedItems: ParamSituationFamiliale[] = [];
  nOrder: boolean = true;
  dOrder: boolean = false;
  selectTout: boolean = false;

  constructor(private situationService: ParamSituationFamilialeService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.gets();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddSituationFamDialogComponent, {
      hasBackdrop: true,
      data: this.situations,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.add.subscribe(situation => {
      this.store(situation);
      this.dialog.closeAll();
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());

  }

  store(situation: ParamSituationFamiliale) {
    console.log('ADD situation '+situation.libelle)
    this.situationService.add(situation).subscribe(_situation => this.situations.push(_situation));
  }

  openSnackBar(nom: string, id: number) {
    let snackbarRef = this.snackBar.open("Confirmez la suppression de l'entité " + nom, "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }
  delete(id: number) {
    this.situationService.delete(id).subscribe(() => this.gets());
  }

  gets() {
    this.situationService.gets().subscribe(situations => {
      this.situations = situations;
    });
  }
  openUpdateDialog(situation: ParamSituationFamiliale) {
    const dialogRef = this.dialog.open(UpdateSituationFamDialogComponent, {
      hasBackdrop: true,
      data: situation,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.update.subscribe((situation: ParamSituationFamiliale) => {
      this.update(situation);
      console.log('Update event ! - ' + situation.libelle);
      this.dialog.closeAll();
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());

  }

  update(situation: ParamSituationFamiliale) {
    this.situationService.update(situation.id, situation).subscribe();
  }

  sortByName() {
    this.nOrder = !this.nOrder;
    this.situations = this.situations.sort((a: ParamSituationFamiliale, b: ParamSituationFamiliale) => {
      return this.nOrder ? ((a.libelle > b.libelle) ? 1 : -1) : ((a.libelle < b.libelle) ? 1 : -1);
    })
  }
  sortByDescription() {
    this.dOrder = !this.dOrder;
    this.situations = this.situations.sort((a: ParamSituationFamiliale, b: ParamSituationFamiliale) => {
      return this.dOrder ? ((a.description > b.description) ? 1 : -1) : ((a.description < b.description) ? 1 : -1);
    })
  }

  select(situation: ParamSituationFamiliale) {
    if (!this.selectedItems.includes(situation))
      this.selectedItems.push(situation);
    else {
      let index = this.selectedItems.indexOf(situation);
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
      this.situations.map((it) => this.selectedItems.push(it));
    }    

   // console.log(this.selectedItems);
  }

  isSelected(situation: ParamSituationFamiliale){
    return this.selectedItems.includes(situation)
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
