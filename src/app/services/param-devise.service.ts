import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { ParamDeviseProjet } from '../beans/param_devise_projet';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ParamDeviseService{

  constructor(private http : HttpClient) { }

  gets():Observable<ParamDeviseProjet[]>
  {
    return this.http.get<ParamDeviseProjet[]>(`${Globals.url}/ParamDeviseProjet`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(paramDeviseProjet: ParamDeviseProjet) : Observable<ParamDeviseProjet>
  {
    return this.http.post<ParamDeviseProjet>(`${Globals.url}/ParamDeviseProjet`,paramDeviseProjet , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<ParamDeviseProjet>(`${Globals.url}/ParamDeviseProjet/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/ParamDeviseProjet/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, paramDeviseProjet: ParamDeviseProjet):Observable<ParamDeviseProjet>
  {
    return this.http.put<ParamDeviseProjet>(`${Globals.url}/ParamDeviseProjet/${id}`,paramDeviseProjet, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}

