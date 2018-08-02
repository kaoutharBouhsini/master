import { SecteurActivites } from "./secteurs_activites";

export class Client {
    id: number;
    address: string;
    city: string;
    country: string;
    effectif: number;
    logo: string;
    name: string;
    phone: string;
    secteur: SecteurActivites;
}