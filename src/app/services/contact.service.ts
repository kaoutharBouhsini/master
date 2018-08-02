import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Contact } from '../beans/contact';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactService{

  constructor(private http : HttpClient) { }

  gets():Observable<Contact[]>
  {
    return this.http.get<Contact[]>(`${Globals.url}/Contact`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(contact: Contact) : Observable<Contact>
  {
    return this.http.post<Contact>(`${Globals.url}/Contact`,contact , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<Contact>(`${Globals.url}/Contact/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/Contact/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, contact: Contact):Observable<Contact>
  {
    return this.http.put<Contact>(`${Globals.url}/Contact/${id}`,contact, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}