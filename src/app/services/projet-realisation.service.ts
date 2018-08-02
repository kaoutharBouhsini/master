import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { ProjetRealisation } from '../beans/projet_realisation';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProjetRealisationService{

  constructor(private http : HttpClient) { }

  gets():Observable<ProjetRealisation[]>
  {
    return this.http.get<ProjetRealisation[]>(`${Globals.url}/ProjetRealisations`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(projet_realisation: ProjetRealisation) : Observable<ProjetRealisation>
  {
    return this.http.post<ProjetRealisation>(`${Globals.url}/ProjetRealisations`, projet_realisation, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<ProjetRealisation>(`${Globals.url}/ProjetRealisations/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/ProjetRealisations/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, projet_realisation: ProjetRealisation):Observable<ProjetRealisation>
  {
    return this.http.put<ProjetRealisation>(`${Globals.url}/ProjetRealisations/${id}`,projet_realisation , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}

