import { Client } from "./client";
import { ParamEntite } from "./param_entite";
import { ParamTypeExecutionProjet } from "./param_type_execution_projet";
import { ParamDeviseProjet } from "./param_devise_projet";
import { ParamStatutProjet } from "./param_statut_projet";

export class Projet {
    id: number;
    code: string;
    title: string;
    description: string;
    logo: string;
    budget: number;
    charge: number;
    beginning: Date;
    end: Date;
    client: Client;
    clientInter?: Client;
    entite: ParamEntite;
    typeExecutionProjet: ParamTypeExecutionProjet;
    deviseProjet: ParamDeviseProjet;
    statutProjet: ParamStatutProjet;
}