import { AddFamillePjDialogComponent } from './add-famille-pj-dialog/add-famille-pj-dialog.component';
import { UpdateFamillePjDialogComponent } from './update-famille-pj-dialog/update-famille-pj-dialog.component';
import { RefFamillePjService } from '../../../../services/ref-famille-pj.service';
import { RefFamillePJ } from '../../../../beans/ref_famille_PJ';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-param-famille-pj',
  templateUrl: './param-famille-pj.component.html',
  styleUrls: ['./param-famille-pj.component.css']
})
export class ParamFamillePjComponent implements OnInit{

familles: RefFamillePJ[] = [];
selectedItems: RefFamillePJ[] = [];
nOrder: boolean = true;
dOrder: boolean = false;
selectTout: boolean = false;

constructor(private familleService: RefFamillePjService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

ngOnInit() {
  this.gets();
}
openDialog() {
  const dialogRef = this.dialog.open(AddFamillePjDialogComponent, {
    hasBackdrop: true,
    data: this.familles,
    panelClass: 'custom-modalbox',
    width: '40%'
  });

  dialogRef.componentInstance.add.subscribe(famille => {
    this.store(famille);
    this.dialog.closeAll();
  });
  dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());

}

store(famille: RefFamillePJ) {
  console.log('ADD famille '+famille.name)
  this.familleService.add(famille).subscribe(_famille => this.familles.push(_famille));
}

openSnackBar(nom: string, id: number) {
  let snackbarRef = this.snackBar.open("Confirmez la suppression de " + nom, "Oui", {
    duration: 5000,
  });
  snackbarRef.onAction().subscribe(() => this.delete(id));
}
delete(id: number) {
  this.familleService.delete(id).subscribe(() => this.gets());
}

gets() {
  this.familleService.gets().subscribe(familles => {
    this.familles = familles;
  });
}
openUpdateDialog(famille: RefFamillePJ) {
  const dialogRef = this.dialog.open(UpdateFamillePjDialogComponent, {
    hasBackdrop: true,
    data: famille,
    panelClass: 'custom-modalbox',
    width: '40%'
  });

  dialogRef.componentInstance.update.subscribe((famille: RefFamillePJ) => {
    this.update(famille);
    console.log('Update event ! - ' + famille.name);
    this.dialog.closeAll();
  });
  dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());
}

update(famille: RefFamillePJ) {
  this.familleService.update(famille.id, famille).subscribe();
}

sortByName() {
  this.nOrder = !this.nOrder;
  this.familles = this.familles.sort((a: RefFamillePJ, b: RefFamillePJ) => {
    return this.nOrder ? ((a.name > b.name) ? 1 : -1) : ((a.name < b.name) ? 1 : -1);
  })
}
sortByDescription() {
  this.dOrder = !this.dOrder;
  this.familles = this.familles.sort((a: RefFamillePJ, b: RefFamillePJ) => {
    return this.dOrder ? ((a.description > b.description) ? 1 : -1) : ((a.description < b.description) ? 1 : -1);
  })
}

select(famille: RefFamillePJ) {
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
    this.familles.map((it) => this.selectedItems.push(it));
  }    

 // console.log(this.selectedItems);
}

isSelected(famille: RefFamillePJ){
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
