
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Actor } from '../models/Actor';

@Injectable({ providedIn: 'root' })

export class ActorService {

    constructor(
        private router: Router,
        private http: HttpClient
        ){}

    listActors() {
        return this.http.get<Actor[]>(`${environment.apiUrl}/actor/index`);
    }

    /* TODO DGorges usar depois que conectar no back
    listActorsbyType(type: String) {
        return this.http.get<Actor[]>(`${environment.apiUrl}/list/actors/type/${type}`);
    }*/
    listActorsbyType(type: String) {
        let actors: Actor[] = [new Actor];
        
        let newActor: Actor = new Actor;
        newActor.name = type+'-João';
        
        actors.push(newActor);
        
        let newActor2: Actor = new Actor;
        newActor2.name = type+'-Maria';
        
        actors.push(newActor2);
        
        let newActor3: Actor = new Actor;
        newActor3.name = type+'-Anna';
        actors.push(newActor3);

        return actors;
    }

    findById(id: String){
        return this.http.get<Actor>(`${environment.apiUrl}/actor/${id}`);
    }

    findByEmail(email: String){
        return this.http.get<Actor>(`${environment.apiUrl}/actor//${email}`);
    }

    findByDocument(document: String){
        return this.http.get<Actor>(`${environment.apiUrl}/actor///${document}`);
    }

    create(actor: Actor): Observable<Actor>{
        return this.http.post<Actor>(`${environment.apiUrl}/actor`, actor);
    }

    update(actor: Actor,  id: String): Observable<Actor>{
        return this.http.put<Actor>(`${environment.apiUrl}/actor/${id}`, actor);
    }

    delete(id: String): Observable<Actor>{
        return this.http.delete<Actor>(`${environment.apiUrl}/actor/${id}`);
    }
}