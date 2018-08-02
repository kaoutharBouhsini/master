import { Projet } from "./projet";
import { RefFamilleDocumentation } from "./ref_famille_documentation";

export class ProjetDocumentations
{
    id: number;
    title: String;
    link: String;
    projet: Projet;
    familleDocumentation: RefFamilleDocumentation;
}