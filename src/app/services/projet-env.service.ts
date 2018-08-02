import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { ProjetEnvironnement } from '../beans/projet_env';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProjetEnvService{

  constructor(private http : HttpClient) { }

  gets():Observable<ProjetEnvironnement[]>
  {
    return this.http.get<ProjetEnvironnement[]>(`${Globals.url}/ProjetEnvironments`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(projet_env: ProjetEnvironnement) : Observable<ProjetEnvironnement>
  {
    return this.http.post<ProjetEnvironnement>(`${Globals.url}/ProjetEnvironments`,projet_env , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<ProjetEnvironnement>(`${Globals.url}/ProjetEnvironments/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/ProjetEnvironments/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, projet_env: ProjetEnvironnement):Observable<ProjetEnvironnement>
  {
    return this.http.put<ProjetEnvironnement>(`${Globals.url}/ProjetEnvironments/${id}`,projet_env , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}

