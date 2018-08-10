import { CollaborateurService } from './../../../services/collaborateur.service';
import { Collaborateur } from './../../../beans/collaborateur';
import { Component, OnInit, OnChanges, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-collaborateur-update',
  templateUrl: './collaborateur-update.component.html',
  styleUrls: ['./collaborateur-update.component.css']
})
export class CollaborateurUpdateComponent implements OnInit, OnChanges {

  @Input()
  collaborateur : Collaborateur;

  @Output()
  updated = new EventEmitter<string>();

  
  updCollaborateur = new Collaborateur();

  constructor(private collaborateurService: CollaborateurService) { }

  ngOnInit() {
    this.updCollaborateur = this.collaborateur;
    //this.secteurs$ = this.secteurServ.gets();
  }

  ngOnChanges(){
    this.updCollaborateur = this.collaborateur;
  }

  update(id: number) {
    console.log(this.collaborateur);
    this.collaborateurService.update(id, this.updCollaborateur).subscribe(client =>  this.updated.emit('updated'));
  }


}

