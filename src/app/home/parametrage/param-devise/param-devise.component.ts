import { ParamDeviseProjet } from './../../../beans/param_devise_projet';
import { ParamDeviseService } from './../../../services/param-devise.service';
import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-param-devise',
  templateUrl: './param-devise.component.html',
  styleUrls: ['./param-devise.component.css']
})
export class ParamDeviseComponent implements OnInit {

   devises : ParamDeviseProjet[] = [];
  constructor(private paramDeviseServ:ParamDeviseService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.gets();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddDeviseDialogComponent, {
      hasBackdrop:true,
      data:{},
      panelClass: 'custom-modalbox',
      height : '33%',
      width: '40%', 
     });

    dialogRef.componentInstance.add.subscribe(devise => {
        this.store(devise);
        this.dialog.closeAll();
      });
  }

  store(devise : ParamDeviseProjet)
  {
    this.paramDeviseServ.add(devise).subscribe(devise => this.devises.push(devise));
  }

  openSnackBar(nom: string, id:number)
  {
    let snackbarRef = this.snackBar.open("Confirmez la suppression de devise "+nom,"Oui",{
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }
  delete(id: number)
  {
      this.paramDeviseServ.delete(id).subscribe(() => this.gets());  
  }

  gets()
  {
    this.paramDeviseServ.gets().subscribe(devises => {
      this.devises = devises;
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

  constructor(@Inject(MAT_DIALOG_DATA) public data: ParamDeviseProjet, private paramDeviseServ:ParamDeviseService) {}
  devise = new ParamDeviseProjet();

  onSubmit()
  {
    this.add.emit(this.devise);
    console.log('event emitted');
  }
}


