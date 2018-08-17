import { ParamStatutCollaborateur } from './../beans/param-statut-collaborateur';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ParamStatutCollaborateurService {

  constructor(private http : HttpClient) { }

  gets():Observable<ParamStatutCollaborateur[]>
  {
    return this.http.get<ParamStatutCollaborateur[]>(`${Globals.url}/ParamStatutCollaborateur`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(paramStatutCollaborateur: ParamStatutCollaborateur) : Observable<ParamStatutCollaborateur>
  {
    return this.http.post<ParamStatutCollaborateur>(`${Globals.url}/ParamStatutCollaborateur`,paramStatutCollaborateur , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<ParamStatutCollaborateur>(`${Globals.url}/ParamStatutCollaborateur/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/ParamStatutCollaborateur/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, paramStatutCollaborateur: ParamStatutCollaborateur):Observable<ParamStatutCollaborateur>
  {
    return this.http.put<ParamStatutCollaborateur>(`${Globals.url}/ParamStatutCollaborateur/${id}`,paramStatutCollaborateur, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }
}
 