import { FileDownloader } from './../../Utils/file-downloader';
import { saveAs } from 'file-saver/FileSaver';
import { PDFDocument } from './../../beans/pdfdocument';
import { HttpResponse } from '@angular/common/http';
import  'rxjs/Rx';
import { Observable } from 'rxjs';
import { SecteurService } from './../../services/secteur.service';
import { SearchCreteria } from './../../beans/search-creteria';
import { Component, OnInit, Host, OnChanges } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../beans/client';
import { SecteurActivites } from '../../beans/secteurs_activites';
import { FormControl } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client[];
  selectedClient: Client;

  CltName = new FormControl();
  city = new FormControl();
  country = new FormControl();
  phone = new FormControl();
  secteurCtrl = new FormControl();
  searchCreterias : SearchCreteria[] = [];

  secteurs$: Observable<SecteurActivites[]>;
  update = false;
  ngOnInit() {
    this.clients = [];
    this.gets();
    this.secteurs$ = this.secteurService.gets();
  }

  constructor(private clientService: ClientService, private secteurService: SecteurService) { }

  gets() {
    console.log('Gets !');
    this.clientService.gets().subscribe(clients => {
      console.log(clients);
      this.clients = clients;
    });
  }

  add() {
    let client = new Client();
    client.city = this.city.value;
    client.name = this.CltName.value;
    client.phone = this.phone.value;
    client.country = this.country.value;
    this.secteurService.get(this.secteurCtrl.value).subscribe(secteur => {
      client.secteur = secteur;
      this.clientService.add(client).subscribe(client => this.clients.push(client));
    });
  }

  get(id: number) {
    this.clientService.get(id).subscribe(client => console.log(client));
  }

  delete(id: number) {
    this.clientService.delete(id).subscribe(() => this.gets());
  }

  addCreteria(key:string, value:string) {
    this.searchCreterias.push(new SearchCreteria(key, ':' , value));
    console.log(this.searchCreterias);
    this.clientService.search(this.searchCreterias).subscribe(clients => console.log(clients));
  }

  select(client: Client) {
    this.selectedClient = client;
    this.update = true;
  }

  download(id : number){
    this.clientService.download(id).subscribe( (pdfFile : PDFDocument) => FileDownloader.downloadFile(pdfFile),
    error => console.log("Error downloading the file."),
    () => console.info("OK"));
  }
}
