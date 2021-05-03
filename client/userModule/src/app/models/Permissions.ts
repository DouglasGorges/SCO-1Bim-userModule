import { Actor } from "./Actor";
import { Component } from "./Component";

export class Permissions {
    _id?: string;
    actor: Actor;
    component: Component;
    actorCreate: Actor;
    createdAt: Date;
    actorInactivate?: Actor;
    inactivatedAt?: Date;
};