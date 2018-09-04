import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { SecteurActivites } from '../../../../../beans/secteurs_activites';

@Component({
  selector: 'app-update-secteur-dialog',
  templateUrl: './update-secteur-dialog.component.html',
  styleUrls: ['./update-secteur-dialog.component.css']
})
export class UpdateSecteurDialogComponent {

  @Output() update: EventEmitter<SecteurActivites> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: SecteurActivites) {}

  onSubmit() {
    this.update.emit(this.data);
    console.log('event emitted');
  }
}

