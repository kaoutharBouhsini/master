import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { RefEtablissement } from '../beans/ref_etablissement';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RefEtablissementsService {

  constructor(private http : HttpClient) { }

  gets():Observable<RefEtablissement[]>
  {
    return this.http.get<RefEtablissement[]>(`${Globals.url}/RefEtablissement`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(ref_etablissement: RefEtablissement) : Observable<RefEtablissement>
  {
    return this.http.post<RefEtablissement>(`${Globals.url}/RefEtablissement`, ref_etablissement, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<RefEtablissement>(`${Globals.url}/RefEtablissement/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/RefEtablissement/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, ref_etablissement: RefEtablissement):Observable<RefEtablissement>
  {
    return this.http.put<RefEtablissement>(`${Globals.url}/RefEtablissement/${id}`,ref_etablissement , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}
