import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Collaborateur } from '../beans/collaborateur';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CollaborateurService{

  constructor(private http : HttpClient) { }

  gets():Observable<Collaborateur[]>
  {
    return this.http.get<Collaborateur[]>(`${Globals.url}/Collaborateur`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(collaborateur: Collaborateur) : Observable<Collaborateur>
  {
    return this.http.post<Collaborateur>(`${Globals.url}/Collaborateur`,collaborateur , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<Collaborateur>(`${Globals.url}/Collaborateur/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/Collaborateur/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, collaborateur: Collaborateur):Observable<Collaborateur>
  {
    return this.http.put<Collaborateur>(`${Globals.url}/Collaborateur/${id}`,collaborateur, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}
