import { Permissions } from "./Permissions";
import { City } from "./City";

export class Actor {
    _id?: string;
    name: string;
    oin: string;
    phone: string;
    address: string;
    zipCode: string;
    personType: string;
    employeeType: string;
    email: string;
    password: string;
    city: City;
    inactivatedBy: Actor;
    inactivated_at?: Date;
    createdBy: Actor;
    created_at?: Date;
    permissions: Permissions[];
};