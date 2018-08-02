import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { RefFamillePJ } from '../beans/ref_famille_PJ';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RefFamillePjService {

  constructor(private http : HttpClient) { }

  gets():Observable<RefFamillePJ[]>
  {
    return this.http.get<RefFamillePJ[]>(`${Globals.url}/RefFamillePieceJointe`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(ref_famille_PJ: RefFamillePJ) : Observable<RefFamillePJ>
  {
    return this.http.post<RefFamillePJ>(`${Globals.url}/RefFamillePieceJointe`, ref_famille_PJ, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<RefFamillePJ>(`${Globals.url}/RefFamillePieceJointe/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/RefFamillePieceJointe/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, ref_famille_PJ: RefFamillePJ):Observable<RefFamillePJ>
  {
    return this.http.put<RefFamillePJ>(`${Globals.url}/RefFamillePieceJointe/${id}`,ref_famille_PJ , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}
