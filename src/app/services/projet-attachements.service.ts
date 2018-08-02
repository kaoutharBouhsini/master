import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { ProjetAttachement } from '../beans/projet_attachement';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProjetAttachementsService{

  constructor(private http : HttpClient) { }

  gets():Observable<ProjetAttachement[]>
  {
    return this.http.get<ProjetAttachement[]>(`${Globals.url}/ProjetAttachements`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(projet_attachement: ProjetAttachement) : Observable<ProjetAttachement>
  {
    return this.http.post<ProjetAttachement>(`${Globals.url}/ProjetAttachements`,projet_attachement , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<ProjetAttachement>(`${Globals.url}/ProjetAttachements/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/ProjetAttachements/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, projet_attachement: ProjetAttachement):Observable<ProjetAttachement>
  {
    return this.http.put<ProjetAttachement>(`${Globals.url}/ProjetAttachements/${id}`,projet_attachement , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}

