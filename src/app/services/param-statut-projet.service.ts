import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { ParamStatutProjet } from '../beans/param_statut_projet';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ParamStatutProjetService{

  constructor(private http : HttpClient) { }

  gets():Observable<ParamStatutProjet[]>
  {
    return this.http.get<ParamStatutProjet[]>(`${Globals.url}/ParamStatutProjet`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(param_statut_projet: ParamStatutProjet) : Observable<ParamStatutProjet>
  {
    return this.http.post<ParamStatutProjet>(`${Globals.url}/ParamStatutProjet`,param_statut_projet , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<ParamStatutProjet>(`${Globals.url}/ParamStatutProjet/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/ParamStatutProjet/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, param_statut_projet: ParamStatutProjet):Observable<ParamStatutProjet>
  {
    return this.http.put<ParamStatutProjet>(`${Globals.url}/ParamStatutProjet/${id}`,param_statut_projet, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}
