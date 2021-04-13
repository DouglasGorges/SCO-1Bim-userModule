import { User } from "./User";
import { Component } from "./Component";

export class Permissions {
    _id?: string;
    user: User;
    component: Component;
    userCreate: User;
    createdAt: Date;
    userInactivate?: User;
    inactivatedAt?: Date;
};