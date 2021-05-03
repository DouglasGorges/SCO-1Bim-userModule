import { Category } from "./Category";
import { Measure } from "./Measure";
import { Actor } from "./Actor";

export class Product {
    _id?: string;
    manufacturer: Actor;
    name: string;
    label: string;
    ean: string;
    retailPrice: number;
    measurementUnit: Measure;
    category: Category;
};