import { UpdateEnvDialogComponent } from './update-env-dialog/update-env-dialog.component';
import { AddEnvDialogComponent } from './add-env-dialog/add-env-dialog.component';
import { Environment } from './../../../beans/environment';
import { Component, OnInit } from '@angular/core';
import { EnvironnementService } from '../../../services/environnement.service';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-param-environnement',
  templateUrl: './param-environnement.component.html',
  styleUrls: ['./param-environnement.component.css']
})
export class ParamEnvironnementComponent implements OnInit {

  envs: Environment[] = [];
  selectedItems: Environment[] = [];
  nOrder: boolean = true;
  dOrder: boolean = false;
  selectTout: boolean = false;

  constructor(private envService: EnvironnementService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.gets();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddEnvDialogComponent, {
      hasBackdrop: true,
      data: this.envs,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.add.subscribe(env => {
      this.store(env);
      this.dialog.closeAll();
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());
  }

  store(env: Environment) {
    console.log('ADD env ');
    console.log(env);
    this.envService.add(env).subscribe(_env => this.envs.push(env));
  }

  openSnackBar(nom: string, id: number) {
    let snackbarRef = this.snackBar.open("Confirmez la suppression de l'élément " + nom, "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }
  delete(id: number) {
    this.envService.delete(id).subscribe(() => this.gets());
  }

  gets() {
    this.envService.gets().subscribe(envs => {
      this.envs = envs;
      console.log(this.envs);
    });
  }
  openUpdateDialog(env: Environment) {
    console.log(env);
    const dialogRef = this.dialog.open(UpdateEnvDialogComponent, {
      hasBackdrop: true,
      data: env,
      panelClass: 'custom-modalbox',
      width: '40%'
    });

    dialogRef.componentInstance.update.subscribe((env: Environment) => {
      this.update(env);
      console.log('Update event ! - ' + env.libelle);
      this.dialog.closeAll();
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());

  }

  update(env: Environment) {
    this.envService.update(env.id, env).subscribe(() => this.gets());
  }
 
  sortByName() {
    this.nOrder = !this.nOrder;
    this.envs = this.envs.sort((a: Environment, b: Environment) => {
      return this.nOrder ? ((a.libelle > b.libelle) ? 1 : -1) : ((a.libelle < b.libelle) ? 1 : -1);
    })
  }
  sortByDescription() {
    this.dOrder = !this.dOrder;
    this.envs = this.envs.sort((a: Environment, b: Environment) => {
      return this.dOrder ? ((a.description > b.description) ? 1 : -1) : ((a.description < b.description) ? 1 : -1);
    })
  }
  sortByFamille() {
    this.dOrder = !this.dOrder;
    this.envs = this.envs.sort((a: Environment, b: Environment) => {
      return this.dOrder ? ((a.paramTypeEnvironnement!!.refFamilleEnvironnement!!.name > b.paramTypeEnvironnement!!.refFamilleEnvironnement!!.name ) ? 1 : -1) : ((a.paramTypeEnvironnement!!.refFamilleEnvironnement!!.name  < b.paramTypeEnvironnement!!.refFamilleEnvironnement!!.name ) ? 1 : -1);
    })
  }
  sortByType()
  {
    this.nOrder = !this.nOrder;
    this.envs = this.envs.sort((a: Environment, b: Environment) => {
      return this.nOrder ? ((a.paramTypeEnvironnement.name > b.paramTypeEnvironnement.name) ? 1 : -1) : ((a.paramTypeEnvironnement.name < b.paramTypeEnvironnement.name) ? 1 : -1);
    })
  }

  select(environment: Environment) {
    if (!this.selectedItems.includes(environment))
      this.selectedItems.push(environment);
    else {
      let index = this.selectedItems.indexOf(environment);
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
      this.envs.map((it) => this.selectedItems.push(it));
    }    

   // console.log(this.selectedItems);
  }

  isSelected(famille: Environment){
    return this.selectedItems.includes(famille)
  }

  openDeleteSnackBar(){
    let snackbarRef = this.snackBar.open("Confirmez la suppression des éléments selectionnés ", "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => {
      this.selectedItems.map ( (it) => this.delete(it.id));
      this.selectedItems = [];
    });
  }
}
