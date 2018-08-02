import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Role } from '../beans/roles';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http : HttpClient) { }

  gets():Observable<Role[]>
  {
    return this.http.get<Role[]>(`${Globals.url}/Roles`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(role: Role) : Observable<Role>
  {
    return this.http.post<Role>(`${Globals.url}/Roles`, role, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<Role>(`${Globals.url}/Roles/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/Roles/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, role: Role):Observable<Role>
  {
    return this.http.put<Role>(`${Globals.url}/Roles/${id}`,role , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}
