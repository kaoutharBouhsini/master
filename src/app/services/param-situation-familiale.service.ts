import { ParamSituationFamiliale } from './../beans/param-situation-familiale';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ParamSituationFamilialeService {
 
  constructor(private http : HttpClient) { }

  gets():Observable<ParamSituationFamiliale[]>
  {
    return this.http.get<ParamSituationFamiliale[]>(`${Globals.url}/situationFamiliale/`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(paramSituationFamiliale: ParamSituationFamiliale) : Observable<ParamSituationFamiliale>
  {
    return this.http.post<ParamSituationFamiliale>(`${Globals.url}/situationFamiliale/`,paramSituationFamiliale , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<ParamSituationFamiliale>(`${Globals.url}/situationFamiliale/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/situationFamiliale/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, paramSituationFamiliale: ParamSituationFamiliale):Observable<ParamSituationFamiliale>
  {
    return this.http.put<ParamSituationFamiliale>(`${Globals.url}/situationFamiliale/${id}`,paramSituationFamiliale, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }
}
