import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { RefRealisation } from '../beans/ref_realisation';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RefRealisationService {

  constructor(private http : HttpClient) { }

  gets():Observable<RefRealisation[]>
  {
    return this.http.get<RefRealisation[]>(`${Globals.url}/RefRealisation`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(ref_realisation: RefRealisation) : Observable<RefRealisation>
  {
    return this.http.post<RefRealisation>(`${Globals.url}/RefRealisation`, ref_realisation, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<RefRealisation>(`${Globals.url}/RefRealisation/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/RefRealisation/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, ref_realisation: RefRealisation):Observable<RefRealisation>
  {
    return this.http.put<RefRealisation>(`${Globals.url}/RefRealisation/${id}`,ref_realisation , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}
