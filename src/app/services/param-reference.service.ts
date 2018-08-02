import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { ParamReference } from '../beans/param_reference';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ParamReferenceService{

  constructor(private http : HttpClient) { }

  gets():Observable<ParamReference[]>
  {
    return this.http.get<ParamReference[]>(`${Globals.url}/ParamReferenceParameters`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(param_reference: ParamReference) : Observable<ParamReference>
  {
    return this.http.post<ParamReference>(`${Globals.url}/ParamReferenceParameters`,param_reference , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<ParamReference>(`${Globals.url}/ParamReferenceParameters/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/ParamReferenceParameters/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, param_reference: ParamReference):Observable<ParamReference>
  {
    return this.http.put<ParamReference>(`${Globals.url}/ParamReferenceParameters/${id}`,param_reference, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}

