import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { RefFamilleEnvironnement } from '../beans/ref_famille_environnement';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RefFamilleEnvService {

  constructor(private http : HttpClient) { }

  gets():Observable<RefFamilleEnvironnement[]>
  {
    return this.http.get<RefFamilleEnvironnement[]>(`${Globals.url}/RefFamilleEnvironnement`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(ref_famille_environnement: RefFamilleEnvironnement) : Observable<RefFamilleEnvironnement>
  {
    return this.http.post<RefFamilleEnvironnement>(`${Globals.url}/RefFamilleEnvironnement`, ref_famille_environnement, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<RefFamilleEnvironnement>(`${Globals.url}/RefFamilleEnvironnement/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/RefFamilleEnvironnement/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, ref_famille_environnement: RefFamilleEnvironnement):Observable<RefFamilleEnvironnement>
  {
    return this.http.put<RefFamilleEnvironnement>(`${Globals.url}/RefFamilleEnvironnement/${id}`,ref_famille_environnement , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}

