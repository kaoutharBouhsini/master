import { Observable } from 'rxjs';
import { SecteurActivites } from './../../../beans/secteurs_activites';
import { ClientService } from './../../../services/client.service';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Client } from '../../../beans/client';
import { FormControl } from '../../../../../node_modules/@angular/forms';
import { SecteurService } from '../../../services/secteur.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit, OnChanges {

  @Input()
  client : Client;

  @Output()
  updated = new EventEmitter<string>();

  secteurs$: Observable<SecteurActivites[]>;

  CltName = new FormControl();
  city = new FormControl();
  country = new FormControl();
  phone = new FormControl();
  secteurCtrl = new FormControl();

  constructor(private clientService: ClientService, private secteurServ: SecteurService) { }

  ngOnInit() {
    this.init();
    this.secteurs$ = this.secteurServ.gets();
  }

  ngOnChanges(){
      this.init();
  }

  update(id: number) {

    let client = new Client();
    client.name = this.CltName.value;
    client.phone = this.phone.value;
    client.country = this.country.value;
    client.city = this.city.value;
    this.secteurServ.get(this.secteurCtrl.value).subscribe(secteur => {
      client.secteur = secteur;
      this.clientService.update(id, client).subscribe(client =>  this.updated.emit('updated'));
    });

  }

  init(){
    this.CltName.setValue(this.client.name);
    this.city.setValue(this.client.city);
    this.country.setValue(this.client.country);
    this.phone.setValue(this.client.phone);
    this.secteurCtrl.setValue(this.client.secteur.id);
  }
}
