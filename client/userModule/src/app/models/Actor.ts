import { Permissions } from "./Permissions";
import { City } from "./City";

export class Actor {
    _id?: string;
    name: string;
    oin: string;
    phone: string;
    address: string;
    zipCode: string;
    city: City;
    personType: string;
    employeeType: string;
    email: string;
    password: string;
    createdBy: Actor;
    inactivatedBy: Actor;
    inactivatedAt: Date;
    permissions: Permissions[];
};