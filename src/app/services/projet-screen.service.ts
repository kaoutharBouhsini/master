import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { ProjetScreen } from '../beans/projets_screen';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProjetScreenService{

  constructor(private http : HttpClient) { }

  gets():Observable<ProjetScreen[]>
  {
    return this.http.get<ProjetScreen[]>(`${Globals.url}/ProjetScreens`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(projets_screen: ProjetScreen) : Observable<ProjetScreen>
  {
    return this.http.post<ProjetScreen>(`${Globals.url}/ProjetScreens`, projets_screen, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<ProjetScreen>(`${Globals.url}/ProjetScreens/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/ProjetScreens/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, projets_screen: ProjetScreen):Observable<ProjetScreen>
  {
    return this.http.put<ProjetScreen>(`${Globals.url}/ProjetScreens/${id}`,projets_screen , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}