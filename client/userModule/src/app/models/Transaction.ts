import { Actor } from "./Actor";

export class Transaction {
    _id?: string;
    establishmentIn: Actor;
    establishmentOut: Actor;
    transactionType: string;
    employee: Actor;
    documentType: string;
    document: string;
    date: Date;
    totalPrice: number;
};