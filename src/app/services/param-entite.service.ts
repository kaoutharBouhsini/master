import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { ParamEntite } from '../beans/param_entite';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ParamEntiteService{

  constructor(private http : HttpClient) { }

  gets():Observable<ParamEntite[]>
  {
    return this.http.get<ParamEntite[]>(`${Globals.url}/ParamEntite`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(paramEntite: ParamEntite) : Observable<ParamEntite>
  {
    return this.http.post<ParamEntite>(`${Globals.url}/ParamEntite`,paramEntite , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<ParamEntite>(`${Globals.url}/ParamEntite/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/ParamEntite/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, paramEntite: ParamEntite):Observable<ParamEntite>
  {
    return this.http.put<ParamEntite>(`${Globals.url}/ParamEntite/${id}`,paramEntite, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}

