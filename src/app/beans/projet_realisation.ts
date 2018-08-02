import { Projet } from "./projet";
import { RefRealisation } from "./ref_realisation";

export class ProjetRealisation{
    id: number;
    detail: string;
    rang: number;
    projet: Projet;  
    refRealisation: RefRealisation;
}