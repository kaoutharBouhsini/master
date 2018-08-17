import { Observable } from 'rxjs';
import { RefFamilleEnvService } from './../../../../services/ref-famille-env.service';
import { RefFamilleEnvironnement } from './../../../../beans/ref_famille_environnement';
import { ParamTypeEnvironnement } from './../../../../beans/param_type_environnement';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, Output, EventEmitter, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-type-env-dialog',
  templateUrl: './add-type-env-dialog.component.html',
  styleUrls: ['./add-type-env-dialog.component.css']
})
export class AddTypeEnvDialogComponent implements OnInit{

  @Output() add: EventEmitter<ParamTypeEnvironnement> = new EventEmitter();
  familleEnvs$: Observable<RefFamilleEnvironnement[]> = this.familleEnvService.gets();

  constructor(@Inject(MAT_DIALOG_DATA) public data: ParamTypeEnvironnement[], private familleEnvService :RefFamilleEnvService) { }
  typeEnv = new ParamTypeEnvironnement();

  ngOnInit(){
      this.typeEnv.refFamilleEnvironnement = new RefFamilleEnvironnement();
  }
  onSubmit() {
    this.familleEnvService.get(this.typeEnv.refFamilleEnvironnement.id).subscribe(famille => {
      this.typeEnv.refFamilleEnvironnement = famille;
    });
    this.add.emit(this.typeEnv);
    console.log('event emitted');
  }

  isUnique(type: string)
  {
    return this.data.filter(it => it.name == type).length ? false: true;
  }
}
