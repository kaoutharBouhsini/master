import { CollaborateurService } from './../services/collaborateur.service';
import { ClientService } from './../services/client.service';
import { Collaborateur } from './../beans/collaborateur';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Client } from '../beans/client';
import { Projet } from '../beans/projet';
import { ProjetService } from '../services/projet.service';
import { SearchCreteria } from '../beans/search-creteria';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clients: Client[] = [];
  collaborateurs: Collaborateur[] = [];
  projets: Projet[] = [];

  resClients: Client[] = [];
  resCollaborateurs: Collaborateur[] = [];
  resProjets: Projet[] = [];

  recherche = '';


  constructor(private clientServ: ClientService, private collaborateurServ: CollaborateurService, private projetServ: ProjetService) { }

  ngOnInit() {
    this.collaborateurServ.gets().subscribe(collaborateurs => this.collaborateurs = collaborateurs);
    this.clientServ.gets().subscribe(clients => this.clients = clients);
    this.projetServ.gets().subscribe(projets => this.projets = projets);  
  }

  

  rechercher() {

    this.recherche = this.recherche.toLowerCase();

    console.log(this.recherche);
    //collab
    this.resCollaborateurs = this.collaborateurs.filter(it => (it.lastname + ' ' + it.firstname).toLowerCase().includes(this.recherche) || it.fonctionRessourcesHumaines.name.toLowerCase().includes(this.recherche));

    //projets
    this.resProjets = this.projets.filter(it => it.title.toLowerCase().includes(this.recherche) || it.code.toLowerCase().includes(this.recherche));

    //clients
    this.resClients = this.clients.filter(it => it.name.toLowerCase().includes(this.recherche) || it.secteur.name.toLowerCase().includes(this.recherche));

  }
}
