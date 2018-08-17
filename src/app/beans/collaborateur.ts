import { ParamStatutCollaborateur } from './param-statut-collaborateur';
import { ParamSituationFamiliale } from './param-situation-familiale';
import { ParamSexe } from './param-sexe';
import { RefFonctionRh } from "./ref_fonctions_rh";
import { RefNiveauEtude } from "./ref_niveau_etudes";
import { RefEtablissement } from "./ref_etablissement";
import { ParamEntite } from "./param_entite";

export class Collaborateur {
    id: number;
    firstname: string;
    lastname: string;
    birthDay: string;
    picture: string;
    childrenNumber: number;
    address: string;
    personnalEmail: string;
    professionalEmail: string;
    phone: string;
    /*comment: string;
    comingDate: string;
    goingDate: string;*/
    hiringDate: string;
    sexe: ParamSexe;
    situationFamiliale: ParamSituationFamiliale;
    statutCollaborateur: ParamStatutCollaborateur;

    fonctionRessourcesHumaines: RefFonctionRh;
    niveauEtudes: RefNiveauEtude;
    etablissement: RefEtablissement;
    entite: ParamEntite;

}
