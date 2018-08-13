import { AddDeviseDialogComponent } from './add-devise-dialog/add-devise-dialog.component';
import { ParamDeviseProjet } from './../../../beans/param_devise_projet';
import { ParamDeviseService } from './../../../services/param-devise.service';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-param-devise',
  templateUrl: './param-devise.component.html',
  styleUrls: ['./param-devise.component.css']
})
export class ParamDeviseComponent implements OnInit {

  devises : ParamDeviseProjet[] = [];
  constructor(private paramDeviseServ:ParamDeviseService, public dialog: MatDialog) { }

  ngOnInit() {
    this.paramDeviseServ.gets().subscribe(devises => {
      this.devises = devises;
      this.dataSource = this.devises;
    });

  }
  
  openDialog() {
    this.dialog.open(AddDeviseDialogComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
  displayedColumns: string[] = ['name', 'description', 'operation'];
  dataSource = [];

}



