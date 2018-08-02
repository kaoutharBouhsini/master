import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { ParamTypeExecutionProjet } from '../beans/param_type_execution_projet';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ParamTypeExecProjetService{

  constructor(private http : HttpClient) { }

  gets():Observable<ParamTypeExecutionProjet[]>
  {
    return this.http.get<ParamTypeExecutionProjet[]>(`${Globals.url}/ParamTypeExecutionProjet`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(param_type_execution_projet: ParamTypeExecutionProjet) : Observable<ParamTypeExecutionProjet>
  {
    return this.http.post<ParamTypeExecutionProjet>(`${Globals.url}/ParamTypeExecutionProjet`,param_type_execution_projet , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<ParamTypeExecutionProjet>(`${Globals.url}/ParamTypeExecutionProjet/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/ParamTypeExecutionProjet/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, param_type_execution_projet: ParamTypeExecutionProjet):Observable<ParamTypeExecutionProjet>
  {
    return this.http.put<ParamTypeExecutionProjet>(`${Globals.url}/ParamTypeExecutionProjet/${id}`,param_type_execution_projet, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}