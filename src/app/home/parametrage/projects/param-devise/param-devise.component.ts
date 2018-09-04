import { DeviseUpdateDialogComponent } from './devise-update-dialog/devise-update-dialog.component';
import { ParamDeviseProjet } from '../../../../beans/param_devise_projet';
import { ParamDeviseService } from '../../../../services/param-devise.service';
import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-param-devise',
  templateUrl: './param-devise.component.html',
  styleUrls: ['./param-devise.component.css']
})
export class ParamDeviseComponent implements OnInit {

  devises: ParamDeviseProjet[] = [];
  selectedItems: ParamDeviseProjet[] = [];
  nOrder: boolean = true;
  dOrder: boolean = false;
  selectTout: boolean = false;

  constructor(private paramDeviseServ: ParamDeviseService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.gets();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddDeviseDialogComponent, {
      hasBackdrop: true,
      data: this.devises,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.add.subscribe(devise => {
      this.store(devise);
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());
  }

  store(devise: ParamDeviseProjet) {
    this.paramDeviseServ.add(devise).subscribe(devise => {
      this.devises.push(devise);
      this.dialog.closeAll();
    });
  }

  openSnackBar(nom: string, id: number) {
    let snackbarRef = this.snackBar.open("Confirmez la suppression de devise " + nom, "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }
  delete(id: number) {
    this.paramDeviseServ.delete(id).subscribe(() => this.gets());
  }

  gets() {
    this.paramDeviseServ.gets().subscribe(devises => {
      this.devises = devises;
    });
  }
  openUpdateDialog(devise: ParamDeviseProjet) {
    const dialogRef = this.dialog.open(DeviseUpdateDialogComponent, {
      hasBackdrop: true,
      data: devise,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.update.subscribe((devise: ParamDeviseProjet) => {
      this.update(devise);
      console.log('Update event ! - ' + devise.description);
    });

    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());

  }

  update(devise: ParamDeviseProjet) {
    this.paramDeviseServ.update(devise.id, devise).subscribe(() => this.dialog.closeAll());
  }

  sortByName() {
    this.nOrder = !this.nOrder;
    this.devises = this.devises.sort((a: ParamDeviseProjet, b: ParamDeviseProjet) => {
      return this.nOrder ? ((a.name > b.name) ? 1 : -1) : ((a.name < b.name) ? 1 : -1);
    })
  }

  sortByDescription() {
    this.dOrder = !this.dOrder;
    this.devises = this.devises.sort((a: ParamDeviseProjet, b: ParamDeviseProjet) => {
      return this.dOrder ? ((a.description > b.description) ? 1 : -1) : ((a.description < b.description) ? 1 : -1);
    })
  }

  select(devise: ParamDeviseProjet) {
    if (!this.selectedItems.includes(devise))
      this.selectedItems.push(devise);
    else {
      let index = this.selectedItems.indexOf(devise);
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
      this.devises.map((it) => this.selectedItems.push(it));
    }    

   // console.log(this.selectedItems);
  }

  isSelected(devise: ParamDeviseProjet){
    return this.selectedItems.includes(devise)
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


@Component({
  selector: 'app-add-devise-dialog',
  templateUrl: './add-devise-dialog/add-devise-dialog.component.html',
  styleUrls: ['./add-devise-dialog/add-devise-dialog.component.css']
})
export class AddDeviseDialogComponent {

  @Output() add: EventEmitter<ParamDeviseProjet> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: ParamDeviseProjet[]) { }
  devise = new ParamDeviseProjet();

  isUnique(devise: string)
  {
    return this.data.filter(it => it.name == devise).length ? false: true;
  }
  onSubmit() {
    this.add.emit(this.devise);
    console.log('event emitted');
  }

  close()
  {
    this.closed.emit();
  }
}


