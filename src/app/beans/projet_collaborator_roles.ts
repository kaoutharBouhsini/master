import { Projet } from "./projet";
import { Collaborateur } from "./collaborateur";
import { Role } from "./roles";

export class ProjetCollaboratorRoles {
    id: number;
    projet: Projet;
    collaborateur: Collaborateur;
    role: Role;
}