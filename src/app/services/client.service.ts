import { HttpHeaders } from '@angular/common/http';
import { SearchCreteria } from './../beans/search-creteria';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Client } from '../beans/client';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http : HttpClient) { }

  gets():Observable<Client[]>
  {
    return this.http.get<Client[]>(`${Globals.url}/Client`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  
  search(searchs : SearchCreteria[]):Observable<Client[]>
  {
    return this.http.post<Client[]>(`${Globals.url}/Client/findwithcritaria`,searchs, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(client: Client) : Observable<Client>
  {
    return this.http.post<Client>(`${Globals.url}/Client`, client, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }


  get(id : number)
  {
    return this.http.get<Client>(`${Globals.url}/Client/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/Client/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, client: Client):Observable<Client>
  {
    console.log('update method : '+ client);
    return this.http.put<Client>(`${Globals.url}/Client/${id}`,client, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
    
  }

  download(id : number){
    return this.http.get(`${Globals.url}/Client/pdf/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }
}
