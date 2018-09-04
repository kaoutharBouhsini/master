import { AddFamilleDialogComponent } from './add-famille-dialog/add-famille-dialog.component';
import { RefFamilleEnvService } from '../../../../services/ref-famille-env.service';
import { RefFamilleEnvironnement } from '../../../../beans/ref_famille_environnement';
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
  selectedItems: RefFamilleEnvironnement[] = [];
  nOrder: boolean = true;
  dOrder: boolean = false;
  selectTout: boolean = false;

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

    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());
  }

  store(famille: RefFamilleEnvironnement) {
    console.log('ADD famille ' + famille.name)
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
    
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());

  }

  update(famille: RefFamilleEnvironnement) {
    this.RefFamilleEnvService.update(famille.id, famille).subscribe();
  }


  //  *******************************
  sortByName() {
    this.nOrder = !this.nOrder;
    this.familles = this.familles.sort((a: RefFamilleEnvironnement, b: RefFamilleEnvironnement) => {
      return this.nOrder ? ((a.name > b.name) ? 1 : -1) : ((a.name < b.name) ? 1 : -1);
    })
  }

  sortByDescription() {
    this.dOrder = !this.dOrder;
    this.familles = this.familles.sort((a: RefFamilleEnvironnement, b: RefFamilleEnvironnement) => {
      return this.dOrder ? ((a.description > b.description) ? 1 : -1) : ((a.description < b.description) ? 1 : -1);
    })
  }

  select(famille: RefFamilleEnvironnement) {
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

  isSelected(famille: RefFamilleEnvironnement){
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
