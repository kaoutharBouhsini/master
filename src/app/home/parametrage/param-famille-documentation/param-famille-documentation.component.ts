import { UpdateFamilleDocsDialogComponent } from './update-famille-docs-dialog/update-famille-docs-dialog.component';
import { RefFamilleDocsService } from './../../../services/ref-famille-docs.service';
import { RefFamilleDocumentation } from './../../../beans/ref_famille_documentation';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddFamilleDocsDialogComponent } from './add-famille-docs-dialog/add-famille-docs-dialog.component';
@Component({
  selector: 'app-param-famille-documentation',
  templateUrl: './param-famille-documentation.component.html',
  styleUrls: ['./param-famille-documentation.component.css']
})
export class ParamFamilleDocumentationComponent implements OnInit {

  familles: RefFamilleDocumentation[] = [];
  selectedItems: RefFamilleDocumentation[] = [];
  nOrder: boolean = true;
  dOrder: boolean = false;
  selectTout: boolean = false;
  
  constructor(private familleService: RefFamilleDocsService, public dialog: MatDialog, public snackBar: MatSnackBar) { }
  
  ngOnInit() {
    this.gets();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddFamilleDocsDialogComponent, {
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
  
  store(famille: RefFamilleDocumentation) {
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
  openUpdateDialog(famille: RefFamilleDocumentation) {
    const dialogRef = this.dialog.open(UpdateFamilleDocsDialogComponent, {
      hasBackdrop: true,
      data: famille,
      panelClass: 'custom-modalbox',
      width: '40%'
    });
  
    dialogRef.componentInstance.update.subscribe((famille: RefFamilleDocumentation) => {
      this.update(famille);
      console.log('Update event ! - ' + famille.name);
      this.dialog.closeAll();
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());
  }
  
  update(famille: RefFamilleDocumentation) {
    this.familleService.update(famille.id, famille).subscribe();
  }
  
  sortByName() {
    this.nOrder = !this.nOrder;
    this.familles = this.familles.sort((a: RefFamilleDocumentation, b: RefFamilleDocumentation) => {
      return this.nOrder ? ((a.name > b.name) ? 1 : -1) : ((a.name < b.name) ? 1 : -1);
    })
  }
  sortByDescription() {
    this.dOrder = !this.dOrder;
    this.familles = this.familles.sort((a: RefFamilleDocumentation, b: RefFamilleDocumentation) => {
      return this.dOrder ? ((a.description > b.description) ? 1 : -1) : ((a.description < b.description) ? 1 : -1);
    })
  }
  
  select(famille: RefFamilleDocumentation) {
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
  
  isSelected(famille: RefFamilleDocumentation){
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
