import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
import { Tag } from '../beans/tag';
@Injectable({
  providedIn: 'root'
})
export class TagService {
  constructor(private http : HttpClient) { }

  gets():Observable<Tag[]>
  {
    return this.http.get<Tag[]>(`${Globals.url}/Tags`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(tag: Tag) : Observable<Tag>
  {
    return this.http.post<Tag>(`${Globals.url}/Tags`, tag, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }


  get(id : number)
  {
    return this.http.get<Tag>(`${Globals.url}/Tags/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/Tags/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, tag: Tag):Observable<Tag>
  {
    return this.http.put<Tag>(`${Globals.url}/Tags/${id}`,tag, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }}
