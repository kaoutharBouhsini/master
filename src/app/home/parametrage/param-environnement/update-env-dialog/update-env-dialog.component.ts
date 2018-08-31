import { ParamTypeEnvironnement } from './../../../../beans/param_type_environnement';
import { RefFamilleEnvService } from './../../../../services/ref-famille-env.service';
import { ParamTypeEnvService } from './../../../../services/param-type-env.service';
import { Environment } from '../../../../beans/environment';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, EventEmitter, Output, Inject, OnInit } from '@angular/core';
import { RefFamilleEnvironnement } from '../../../../beans/ref_famille_environnement';
@Component({
  selector: 'app-update-env-dialog',
  templateUrl: './update-env-dialog.component.html',
  styleUrls: ['./update-env-dialog.component.css']
})
export class UpdateEnvDialogComponent implements OnInit {

  @Output() update: EventEmitter<Environment> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  familleEnvs$: Observable<RefFamilleEnvironnement[]> = this.familleEnvService.gets();
  typeEnvs: ParamTypeEnvironnement[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: Environment,private typeService :ParamTypeEnvService, private familleEnvService :RefFamilleEnvService) { }

  ngOnInit(){
      this.typeService.gets().subscribe(types => this.typeEnvs = types);
      if(this.data.paramTypeEnvironnement == null){
        this.data.paramTypeEnvironnement = new ParamTypeEnvironnement();
        this.data.paramTypeEnvironnement.refFamilleEnvironnement = new RefFamilleEnvironnement();
        console.log(this.data);
      }
  }
  onSubmit() {
 
    this.update.emit(this.data);
    console.log('event emitted');
    console.log(this.data);
  }

  close()
  {
    this.closed.emit();
  }

  getTypes(famille: number)
  {
    console.log("appel de getTypes : "+famille);
    return this.typeEnvs.filter((it) => it.refFamilleEnvironnement.id == famille);
  }
}
