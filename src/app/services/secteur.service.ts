import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { SecteurActivites } from '../beans/secteurs_activites';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SecteurService {

  constructor(private http : HttpClient) { }

  gets():Observable<SecteurActivites[]>
  {
    return this.http.get<SecteurActivites[]>(`${Globals.url}/SecteursActivites`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(secteurs_activites: SecteurActivites) : Observable<SecteurActivites>
  {
    return this.http.post<SecteurActivites>(`${Globals.url}/SecteursActivites`, secteurs_activites, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<SecteurActivites>(`${Globals.url}/SecteursActivites/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/SecteursActivites/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, secteurs_activites: SecteurActivites):Observable<SecteurActivites>
  {
    return this.http.put<SecteurActivites>(`${Globals.url}/SecteursActivites/${id}`,secteurs_activites, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }}
