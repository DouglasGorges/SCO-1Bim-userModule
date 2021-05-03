import { Lot } from "./Lot";
import { Transaction } from "./Transaction";

export class TransactionItens {
    _id?: string;
    transaction: Transaction;
    lot: Lot;
    unitPrice: number;
    quantity: number;
    subtotalPrice: number;
};