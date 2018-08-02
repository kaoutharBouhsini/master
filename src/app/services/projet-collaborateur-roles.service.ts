import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { ProjetCollaboratorRoles } from '../beans/projet_collaborator_roles';
import { Globals } from '../globals';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProjetCollaborateurRolesService{

  constructor(private http : HttpClient) { }

  gets():Observable<ProjetCollaboratorRoles[]>
  {
    return this.http.get<ProjetCollaboratorRoles[]>(`${Globals.url}/ProjetCollaboratorRoles`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  add(projet_collaborator_roles: ProjetCollaboratorRoles) : Observable<ProjetCollaboratorRoles>
  {
    return this.http.post<ProjetCollaboratorRoles>(`${Globals.url}/ProjetCollaboratorRoles`,projet_collaborator_roles , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  get(id : number)
  {
    return this.http.get<ProjetCollaboratorRoles>(`${Globals.url}/ProjetCollaboratorRoles/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  delete(id: number)
  {
    return this.http.delete(`${Globals.url}/ProjetCollaboratorRoles/${id}`, Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

  update(id: number, projet_collaborator_roles: ProjetCollaboratorRoles):Observable<ProjetCollaboratorRoles>
  {
    return this.http.put<ProjetCollaboratorRoles>(`${Globals.url}/ProjetCollaboratorRoles/${id}`,projet_collaborator_roles , Globals.httpOptions).pipe(
      retry(2),
      catchError(Globals.handleError)
    );
  }

}

