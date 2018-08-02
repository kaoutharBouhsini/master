import { Client } from "./client";

export class Contact {
    id: number;
    function: string;
    mail: string;
    name: string;
    phone: string;
    client: Client;
}