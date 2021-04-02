export class User {
    _id?: string;
    firstname: string;
    lastname: string;
    document: string;
    email: string;
    password: string;
    idActive: boolean;
    token: string;
    createdAt?: Date;
};