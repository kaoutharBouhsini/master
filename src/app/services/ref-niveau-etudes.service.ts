import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { RefNiveauEtude } from '../beans/ref_niveau_etudes';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RefNiveauEtudesService {

  constructor(private http : HttpClient) { }

  gets():Observable<RefNiveauEtude[]>
  {
    return this.http.get<RefNiveauEtude[]>(`${Globals.url}/RefNiveauEtudes`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(ref_niveau_etudes: RefNiveauEtude) : Observable<RefNiveauEtude>
  {
    return this.http.post<RefNiveauEtude>(`${Globals.url}/RefNiveauEtudes`, ref_niveau_etudes, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<RefNiveauEtude>(`${Globals.url}/RefNiveauEtudes/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/RefNiveauEtudes/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, ref_niveau_etudes: RefNiveauEtude):Observable<RefNiveauEtude>
  {
    return this.http.put<RefNiveauEtude>(`${Globals.url}/RefNiveauEtudes/${id}`,ref_niveau_etudes , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}
