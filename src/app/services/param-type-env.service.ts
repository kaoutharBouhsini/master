import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { ParamTypeEnvironnement } from '../beans/param_type_environnement';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ParamTypeEnvService{

  constructor(private http : HttpClient) { }

  gets():Observable<ParamTypeEnvironnement[]>
  {
    return this.http.get<ParamTypeEnvironnement[]>(`${Globals.url}/ParamTypeEnvironnement`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(param_type_environnement: ParamTypeEnvironnement) : Observable<ParamTypeEnvironnement>
  {
    return this.http.post<ParamTypeEnvironnement>(`${Globals.url}/ParamTypeEnvironnement`,param_type_environnement , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<ParamTypeEnvironnement>(`${Globals.url}/ParamTypeEnvironnement/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/ParamTypeEnvironnement/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, param_type_environnement: ParamTypeEnvironnement):Observable<ParamTypeEnvironnement>
  {
    return this.http.put<ParamTypeEnvironnement>(`${Globals.url}/ParamTypeEnvironnement/${id}`,param_type_environnement, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}

