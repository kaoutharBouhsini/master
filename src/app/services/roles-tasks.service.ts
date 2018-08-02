import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { RolesTaches } from '../beans/roles_taches';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RolesTasksService {

  constructor(private http : HttpClient) { }

  gets():Observable<RolesTaches[]>
  {
    return this.http.get<RolesTaches[]>(`${Globals.url}/RoleTasks`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(roles_taches: RolesTaches) : Observable<RolesTaches>
  {
    return this.http.post<RolesTaches>(`${Globals.url}/RoleTasks`, roles_taches, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<RolesTaches>(`${Globals.url}/RoleTasks/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/RoleTasks/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, roles_taches: RolesTaches):Observable<RolesTaches>
  {
    return this.http.put<RolesTaches>(`${Globals.url}/RoleTasks/${id}`,roles_taches , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }}
