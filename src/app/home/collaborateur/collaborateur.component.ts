import { SearchCreteria } from './../../beans/search-creteria';
import { CollaborateurService } from './../../services/collaborateur.service';
import { Collaborateur } from './../../beans/collaborateur';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.css']
})
export class CollaborateurComponent implements OnInit {

  collaborateurs: Collaborateur[];
  selectedCollaborateur: Collaborateur;
  insertCollab = new Collaborateur();
  searchCreterias : SearchCreteria[] = [];
  update = false;

  ngOnInit() {
    this.collaborateurs = [];
    this.gets();
    //this.secteurs$ = this.secteurService.gets();
  }

  constructor(private collaborateurService: CollaborateurService) { }

  gets() {
    console.log('Gets !');
    this.collaborateurService.gets().subscribe(Collaborateurs => {
      console.log(Collaborateurs);
      this.collaborateurs = Collaborateurs;
    });
  }

  add() {
      //console.log(this.insertCollab);
      this.collaborateurService.add(this.insertCollab).subscribe(Collaborateur => this.collaborateurs.push(Collaborateur));
  }

  get(id: number) {
    this.collaborateurService.get(id).subscribe(Collaborateur => console.log(Collaborateur));
  }

  delete(id: number) {
    this.collaborateurService.delete(id).subscribe(() => this.gets());
  }

  addCreteria(key:string, value:string) {
    this.searchCreterias.push(new SearchCreteria(key, ':' , value));
    console.log(this.searchCreterias);
    this.collaborateurService.search(this.searchCreterias).subscribe(Collaborateurs => console.log(Collaborateurs));
  }

  select(Collaborateur: Collaborateur) {
    this.selectedCollaborateur = Collaborateur;
    this.update = true;
  }

}
