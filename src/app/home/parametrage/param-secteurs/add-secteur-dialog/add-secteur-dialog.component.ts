import { MAT_DIALOG_DATA } from '@angular/material';
import { SecteurActivites } from './../../../../beans/secteurs_activites';
import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';

@Component({
  selector: 'app-add-secteur-dialog',
  templateUrl: './add-secteur-dialog.component.html',
  styleUrls: ['./add-secteur-dialog.component.css']
})
export class AddSecteurDialogComponent{

  @Output() add: EventEmitter<SecteurActivites> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: SecteurActivites[]) { }
  secteur = new SecteurActivites();
  
  isUnique(devise: string)
  {
    return this.data.filter(it => it.name == devise).length ? false: true;
  }
  
  onSubmit() {
    this.add.emit(this.secteur);
    console.log('event emitted');
  }
} 
