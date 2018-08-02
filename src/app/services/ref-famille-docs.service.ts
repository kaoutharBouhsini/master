import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { RefFamilleDocumentation } from '../beans/ref_famille_documentation';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RefFamilleDocsService {

  constructor(private http : HttpClient) { }

  gets():Observable<RefFamilleDocumentation[]>
  {
    return this.http.get<RefFamilleDocumentation[]>(`${Globals.url}/RefFamilleDocumentation`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(ref_famille_documentation: RefFamilleDocumentation) : Observable<RefFamilleDocumentation>
  {
    return this.http.post<RefFamilleDocumentation>(`${Globals.url}/RefFamilleDocumentation`, ref_famille_documentation, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<RefFamilleDocumentation>(`${Globals.url}/RefFamilleDocumentation/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/RefFamilleDocumentation/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, ref_famille_documentation: RefFamilleDocumentation):Observable<RefFamilleDocumentation>
  {
    return this.http.put<RefFamilleDocumentation>(`${Globals.url}/RefFamilleDocumentation/${id}`,ref_famille_documentation , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}
