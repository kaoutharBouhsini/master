import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../beans/client';
import { SecteurActivites } from '../beans/secteurs_activites';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client[];
  client : Client;

  ngOnInit(){
    this.clients = [];
  }

  constructor(private clientService : ClientService){}

  gets(){
    this.clientService.gets().subscribe(clients => this.clients = clients);
  }

  add(){
    const client = new Client();
    client.city = 'Agadir';
    client.name = 'Somap';
    client.phone = '06665885';
    const secteur =  new SecteurActivites();
    secteur.id = 2;
    client.secteur = secteur;
    this.clientService.add(client).subscribe(client => console.log(client));
  }

  get(id: number)
  {
    this.clientService.get(id).subscribe(client => console.log(client));
  }

  delete(id: number){
    this.clientService.delete(id).subscribe();
  }

  update(id: number)
  {
    const client = new Client();
    client.name = 'Winxoo';
    this.clientService.update(id, client).subscribe(client => console.log(client))
  }


}
