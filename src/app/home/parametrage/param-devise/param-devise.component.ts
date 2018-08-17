import { DeviseUpdateDialogComponent } from './devise-update-dialog/devise-update-dialog.component';
import { ParamDeviseProjet } from './../../../beans/param_devise_projet';
import { ParamDeviseService } from './../../../services/param-devise.service';
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
  }

  update(devise: ParamDeviseProjet) {
    this.paramDeviseServ.update(devise.id, devise).subscribe(() => this.dialog.closeAll());
  }
}


@Component({
  selector: 'app-add-devise-dialog',
  templateUrl: './add-devise-dialog/add-devise-dialog.component.html',
  styleUrls: ['./add-devise-dialog/add-devise-dialog.component.css']
})
export class AddDeviseDialogComponent {

  @Output() add: EventEmitter<ParamDeviseProjet> = new EventEmitter();

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
}


