import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Rapport } from '../beans/rapports';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RapportsService{

  constructor(private http : HttpClient) { }

  gets():Observable<Rapport[]>
  {
    return this.http.get<Rapport[]>(`${Globals.url}/Rapports`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(rapport: Rapport) : Observable<Rapport>
  {
    return this.http.post<Rapport>(`${Globals.url}/Rapports`, rapport, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<Rapport>(`${Globals.url}/Rapports/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/Rapports/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, rapport: Rapport):Observable<Rapport>
  {
    return this.http.put<Rapport>(`${Globals.url}/Rapports/${id}`,rapport , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}


