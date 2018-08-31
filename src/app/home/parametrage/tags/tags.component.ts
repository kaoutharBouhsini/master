import { UpdateTagDialogComponent } from './update-tag-dialog/update-tag-dialog.component';
import { AddTagDialogComponent } from './add-tag-dialog/add-tag-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Tag } from '../../../beans/tag';
import { TagService } from '../../../services/tag.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {


  tags: Tag[] = [];
  selectedItems: Tag[] = [];
  nOrder: boolean = true;
  dOrder: boolean = false;
  selectTout: boolean = false;
  
  constructor(private tagService: TagService, public dialog: MatDialog, public snackBar: MatSnackBar) { }
  
  ngOnInit() {
    this.gets();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddTagDialogComponent, {
      hasBackdrop: true,
      data: this.tags,
      panelClass: 'custom-modalbox',
      width: '40%'
    });
  
    dialogRef.componentInstance.add.subscribe(tag => {
      this.store(tag);
      this.dialog.closeAll();
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());
  
  }
  
  store(tag: Tag) {
    console.log('ADD tag '+tag.name)
    this.tagService.add(tag).subscribe(_tag => this.tags.push(_tag));
  }
  
  openSnackBar(nom: string, id: number) {
    let snackbarRef = this.snackBar.open("Confirmez la suppression de " + nom, "Oui", {
      duration: 5000,
    });
    snackbarRef.onAction().subscribe(() => this.delete(id));
  }
  delete(id: number) {
    this.tagService.delete(id).subscribe(() => this.gets());
  }
  
  gets() {
    this.tagService.gets().subscribe(tags => {
      this.tags = tags;
    });
  }
  openUpdateDialog(tag: Tag) {
    const dialogRef = this.dialog.open(UpdateTagDialogComponent, {
      hasBackdrop: true,
      data: tag,
      panelClass: 'custom-modalbox',
      width: '40%'
    });
  
    dialogRef.componentInstance.update.subscribe((tag: Tag) => {
      this.update(tag);
      console.log('Update event ! - ' + tag.name);
      this.dialog.closeAll();
    });
    dialogRef.componentInstance.closed.subscribe(() => dialogRef.close());
  }
  
  update(tag: Tag) {
    this.tagService.update(tag.id, tag).subscribe();
  }
  
  sortByName() {
    this.nOrder = !this.nOrder;
    this.tags = this.tags.sort((a: Tag, b: Tag) => {
      return this.nOrder ? ((a.name > b.name) ? 1 : -1) : ((a.name < b.name) ? 1 : -1);
    })
  }
  sortByDescription() {
    this.dOrder = !this.dOrder;
    this.tags = this.tags.sort((a: Tag, b: Tag) => {
      return this.dOrder ? ((a.description > b.description) ? 1 : -1) : ((a.description < b.description) ? 1 : -1);
    })
  }
  
  select(tag: Tag) {
    if (!this.selectedItems.includes(tag))
      this.selectedItems.push(tag);
    else {
      let index = this.selectedItems.indexOf(tag);
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
      this.tags.map((it) => this.selectedItems.push(it));
    }    
  
   // console.log(this.selectedItems);
  }
  
  isSelected(tag: Tag){
    return this.selectedItems.includes(tag)
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
