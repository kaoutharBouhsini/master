import { RefFamilleEnvService } from '../../../../../services/ref-famille-env.service';
import { RefFamilleEnvironnement } from '../../../../../beans/ref_famille_environnement';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, EventEmitter, Output, Inject, OnInit } from '@angular/core';
import { ParamTypeEnvironnement } from '../../../../../beans/param_type_environnement';

@Component({
  selector: 'app-update-type-env-dialog',
  templateUrl: './update-type-env-dialog.component.html',
  styleUrls: ['./update-type-env-dialog.component.css']
})
export class UpdateTypeEnvDialogComponent implements OnInit{

  @Output() update: EventEmitter<ParamTypeEnvironnement> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  familleEnvs$: Observable<RefFamilleEnvironnement[]> = this.familleEnvService.gets();

  constructor(@Inject(MAT_DIALOG_DATA) public data: ParamTypeEnvironnement, private familleEnvService :RefFamilleEnvService) {}
  ngOnInit()
  {
    if(this.data.refFamilleEnvironnement == null){
      this.data.refFamilleEnvironnement = new RefFamilleEnvironnement();
    }
  }
  
  onSubmit() {
    this.update.emit(this.data);
    console.log('event emitted');
  }

  close()
  {
    this.closed.emit();
  }
}
