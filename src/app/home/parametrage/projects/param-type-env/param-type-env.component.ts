import { MatDialog, MatSnackBar } from '@angular/material';
import { ParamTypeEnvService } from '../../../../services/param-type-env.service';
import { ParamTypeEnvironnement } from '../../../../beans/param_type_environnement';
import { AddTypeEnvDialogComponent } from './add-type-env-dialog/add-type-env-dialog.component';
import { Component, OnInit } from '@angular/core';
import { UpdateTypeEnvDialogComponent } from './update-type-env-dialog/update-type-env-dialog.component';

@Component({
  selector: 'app-param-type-env',
  templateUrl: './param-type-env.component.html',
  styleUrls: ['./param-type-env.component.css']
})
export class ParamTypeEnvComponent implements OnInit {

  typeEnvs: ParamTypeEnvironnement[] = [];
  selectedItems: ParamTypeEnvironnement[] = [];
  nOrder: boolean = true;
  dOrder: boolean = false;
  selectTout: boolean = false;

  constructor(private typeEnvService: ParamTypeEnvService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.gets();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddTypeEnvDialogComponent, {
      hasBackdrop: true,
      data: this.typeEnvs,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.add.subscribe(typeEnv => {
      this.store(typeEnv);
      this.dialog.closeAll();
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());

  }

  store(typeEnv: ParamTypeEnvironnement) {
    console.log('ADD typeEnv ');
    console.log(typeEnv);
    this.typeEnvService.add(typeEnv).subscribe(_typeEnv => this.typeEnvs.push(typeEnv));
  }

  openSnackBar(nom: string, id: number) {
    let snackbarRef = this.snackBar.open("Confirmez la suppression du Type " + nom, "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }
  delete(id: number) {
    this.typeEnvService.delete(id).subscribe(() => this.gets());
  }

  gets() {
    this.typeEnvService.gets().subscribe(typeEnvs => {
      this.typeEnvs = typeEnvs;
    });
  }
  openUpdateDialog(typeEnv: ParamTypeEnvironnement) {
    console.log(typeEnv);
    const dialogRef = this.dialog.open(UpdateTypeEnvDialogComponent, {
      hasBackdrop: true,
      data: typeEnv,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.update.subscribe((typeEnv: ParamTypeEnvironnement) => {
      this.update(typeEnv);
      console.log('Update event ! - ' + typeEnv.name);
      this.dialog.closeAll();
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());

  }

  update(typeEnv: ParamTypeEnvironnement) {
    this.typeEnvService.update(typeEnv.id, typeEnv).subscribe(() => this.gets());
  }
 
  sortByName() {
    this.nOrder = !this.nOrder;
    this.typeEnvs = this.typeEnvs.sort((a: ParamTypeEnvironnement, b: ParamTypeEnvironnement) => {
      return this.nOrder ? ((a.name > b.name) ? 1 : -1) : ((a.name < b.name) ? 1 : -1);
    })
  }
  sortByDescription() {
    this.dOrder = !this.dOrder;
    this.typeEnvs = this.typeEnvs.sort((a: ParamTypeEnvironnement, b: ParamTypeEnvironnement) => {
      return this.dOrder ? ((a.description > b.description) ? 1 : -1) : ((a.description < b.description) ? 1 : -1);
    })
  }
  sortByFamille() {
    this.dOrder = !this.dOrder;
    this.typeEnvs = this.typeEnvs.sort((a: ParamTypeEnvironnement, b: ParamTypeEnvironnement) => {
      return this.dOrder ? ((a.refFamilleEnvironnement!!.name > b.refFamilleEnvironnement!!.name ) ? 1 : -1) : ((a.refFamilleEnvironnement!!.name  < b.refFamilleEnvironnement!!.name ) ? 1 : -1);
    })
  }

  select(famille: ParamTypeEnvironnement) {
    if (!this.selectedItems.includes(famille))
      this.selectedItems.push(famille);
    else {
      let index = this.selectedItems.indexOf(famille);
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
      this.typeEnvs.map((it) => this.selectedItems.push(it));
    }    

   // console.log(this.selectedItems);
  }

  isSelected(famille: ParamTypeEnvironnement){
    return this.selectedItems.includes(famille)
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
