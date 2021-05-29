import { Permissions } from "./Permissions";
import { City } from "./City";

export class Actor {
    id?: number;
    name: string;
    oin: string;
    phone: string;
    address: string;
    zipCode: string;
    personType: string;
    employeeType: string;
    email: string;
    password: string;
    city_id: number;
    inactivatedBy: Actor;
    inactivated_at?: Date;
    createdBy: number;
    created_at?: Date;
    permissions: Permissions[];
};