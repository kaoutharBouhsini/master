import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { ProjetDocumentations } from '../beans/projet_documentations';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProjetDocsService{

  constructor(private http : HttpClient) { }

  gets():Observable<ProjetDocumentations[]>
  {
    return this.http.get<ProjetDocumentations[]>(`${Globals.url}/ProjetDocumentations`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(projet_documentations: ProjetDocumentations) : Observable<ProjetDocumentations>
  {
    return this.http.post<ProjetDocumentations>(`${Globals.url}/ProjetDocumentations`,projet_documentations , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<ProjetDocumentations>(`${Globals.url}/ProjetDocumentations/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/ProjetDocumentations/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, projet_documentations: ProjetDocumentations):Observable<ProjetDocumentations>
  {
    return this.http.put<ProjetDocumentations>(`${Globals.url}/ProjetDocumentations/${id}`,projet_documentations , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}

