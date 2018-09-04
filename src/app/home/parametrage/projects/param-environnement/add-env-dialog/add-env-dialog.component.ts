import { ParamTypeEnvService } from '../../../../../services/param-type-env.service';
import { Observable } from 'rxjs';
import { RefFamilleEnvironnement } from '../../../../../beans/ref_famille_environnement';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { Environment } from '../../../../../beans/environment';
import { RefFamilleEnvService } from '../../../../../services/ref-famille-env.service';
import { ParamTypeEnvironnement } from '../../../../../beans/param_type_environnement';
@Component({
  selector: 'app-add-env-dialog',
  templateUrl: './add-env-dialog.component.html',
  styleUrls: ['./add-env-dialog.component.css']
})
export class AddEnvDialogComponent implements OnInit {

  @Output() add: EventEmitter<Environment> = new EventEmitter();
  @Output() closed: EventEmitter<any> = new EventEmitter();

  familleEnvs$: Observable<RefFamilleEnvironnement[]> = this.familleEnvService.gets();
  typeEnvs: ParamTypeEnvironnement[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: Environment[],private typeService :ParamTypeEnvService, private familleEnvService :RefFamilleEnvService) { }
  env = new Environment();

  ngOnInit(){
      this.env.paramTypeEnvironnement = new ParamTypeEnvironnement();
      this.env.paramTypeEnvironnement.refFamilleEnvironnement = new RefFamilleEnvironnement();
      this.typeService.gets().subscribe(types => this.typeEnvs = types);
  }
  onSubmit() {
    this.typeService.get(this.env.paramTypeEnvironnement.id).subscribe(type => {
      this.env.paramTypeEnvironnement = type;
    });

    this.familleEnvService.get(this.env.paramTypeEnvironnement.refFamilleEnvironnement.id).subscribe(famille => {
      this.env.paramTypeEnvironnement.refFamilleEnvironnement = famille;
    });

    this.add.emit(this.env);
    console.log('event emitted');
    console.log(this.env);
  }

  isUnique(env: string)
  {
    return this.data.filter(it => it.libelle == env).length ? false: true;
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
