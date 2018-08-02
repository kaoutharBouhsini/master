import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Tache } from '../beans/taches';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TachesService {

  constructor(private http : HttpClient) { }

  gets():Observable<Tache[]>
  {
    return this.http.get<Tache[]>(`${Globals.url}/Taches`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(tache: Tache) : Observable<Tache>
  {
    return this.http.post<Tache>(`${Globals.url}/Taches`, tache, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }


  get(id : number)
  {
    return this.http.get<Tache>(`${Globals.url}/Taches/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/Taches/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, tache: Tache):Observable<Tache>
  {
    return this.http.put<Tache>(`${Globals.url}/Taches/${id}`,tache, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }}
