import { ParamSexe } from './../beans/param-sexe';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ParamSexeService {
  constructor(private http : HttpClient) { }

  gets():Observable<ParamSexe[]>
  {
    return this.http.get<ParamSexe[]>(`${Globals.url}/paramSexe`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(paramSexe: ParamSexe) : Observable<ParamSexe>
  {
    return this.http.post<ParamSexe>(`${Globals.url}/paramSexe`,paramSexe , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<ParamSexe>(`${Globals.url}/paramSexe/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/paramSexe/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, paramSexe: ParamSexe):Observable<ParamSexe>
  {
    return this.http.put<ParamSexe>(`${Globals.url}/paramSexe/${id}`,paramSexe, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }
} 
