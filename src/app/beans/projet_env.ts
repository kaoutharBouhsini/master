import { Projet } from "./projet";
import { Environment } from "./environment";

export class ProjetEnvironnement {
    id: number;
    detail: string;
    projet: Projet;
    environnement: Environment;
}