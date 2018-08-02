import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { RefFonctionRh } from '../beans/ref_fonctions_rh';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RefFonctionRhService {

  constructor(private http : HttpClient) { }

  gets():Observable<RefFonctionRh[]>
  {
    return this.http.get<RefFonctionRh[]>(`${Globals.url}/RefFonctionRessourcesHumaines`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(ref_fonctions_rh: RefFonctionRh) : Observable<RefFonctionRh>
  {
    return this.http.post<RefFonctionRh>(`${Globals.url}/RefFonctionRessourcesHumaines`, ref_fonctions_rh, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<RefFonctionRh>(`${Globals.url}/RefFonctionRessourcesHumaines/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/RefFonctionRessourcesHumaines/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, ref_fonctions_rh: RefFonctionRh):Observable<RefFonctionRh>
  {
    return this.http.put<RefFonctionRh>(`${Globals.url}/RefFonctionRessourcesHumaines/${id}`,ref_fonctions_rh , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}
