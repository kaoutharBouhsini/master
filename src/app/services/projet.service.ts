import { SearchCreteria } from './../beans/search-creteria';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Projet } from '../beans/projet';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProjetService{

  constructor(private http : HttpClient) { }

  gets():Observable<Projet[]>
  {
    return this.http.get<Projet[]>(`${Globals.url}/Projet`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }
  search(searchs: SearchCreteria[]): Observable<Projet[]> {
    return this.http.post<Projet[]>(`${Globals.url}/Projet/findwithcritaria`, searchs, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }
  add(projet: Projet) : Observable<Projet>
  {
    return this.http.post<Projet>(`${Globals.url}/Projet`,projet , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<Projet>(`${Globals.url}/Projet/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/Projet/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, projet: Projet):Observable<Projet>
  {
    return this.http.put<Projet>(`${Globals.url}/Projet/${id}`,projet, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  download(id : number){
    return this.http.get(`${Globals.url}/Projet/pdf/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}