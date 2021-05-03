import { Product } from "./Product";

export class Lot {
    _id?: string;
    product: Product;
    quantityBalance: number;
    expiryDate: Date;
};