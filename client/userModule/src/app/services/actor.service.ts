
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

    listActorsByPersonType(type: String) {
        return this.http.get<Actor[]>(`${environment.apiUrl}/actors/type/${type}`);
    }
    
    findById(id: String){
        return this.http.get<Actor>(`${environment.apiUrl}/actor/${id}`);
    }

    findByEmail(email: String){
        return this.http.get<Actor>(`${environment.apiUrl}/actor/find/${email}`);
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