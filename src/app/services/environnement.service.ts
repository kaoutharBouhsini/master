import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Environment } from '../beans/environment';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EnvironnementService{

  constructor(private http : HttpClient) { }

  gets():Observable<Environment[]>
  {
    return this.http.get<Environment[]>(`${Globals.url}/Environnement`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(environment: Environment) : Observable<Environment>
  {
    return this.http.post<Environment>(`${Globals.url}/Environnement`,environment , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<Environment>(`${Globals.url}/Environnement/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/Environnement/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, environment: Environment):Observable<Environment>
  {
    return this.http.put<Environment>(`${Globals.url}/Environnement/${id}`,environment, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}
