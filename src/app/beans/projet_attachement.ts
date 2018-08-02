import { Projet } from "./projet";
import { RefFamillePJ } from "./ref_famille_PJ";

export class ProjetAttachement {
    id: number;
    title: string;
    link: string;
    projet: Projet;
    famillePieceJointe: RefFamillePJ;
}