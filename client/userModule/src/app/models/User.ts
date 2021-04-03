import { Permissions } from "./Permissions";

export class User {
    _id?: string;
    firstName: string;
    lastName: string;
    document: string;
    email: string;
    password: string;
    idActive: boolean;
    token: string;
    createdAt?: Date;
    permissions: Permissions[];
};