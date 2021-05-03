
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
        return this.http.get<Actor[]>(`${environment.apiUrl}/list/actors`);
    }

    findById(id: String){
        return this.http.get<Actor>(`${environment.apiUrl}/list/actors/${id}`);
    }

    findByEmail(email: String){
        return this.http.get<Actor>(`${environment.apiUrl}/list/actors//${email}`);
    }

    findByDocument(document: String){
        return this.http.get<Actor>(`${environment.apiUrl}/lista/actors///${document}`);
    }

    create(actor: Actor): Observable<Actor>{
        return this.http.post<Actor>(`${environment.apiUrl}/create/actors`, actor);
    }

    update(actor: Actor,  id: String): Observable<Actor>{
        return this.http.post<Actor>(`${environment.apiUrl}/create/actors/update/${id}`, actor);
    }

    delete(id: String): Observable<Actor>{
        return this.http.delete<Actor>(`${environment.apiUrl}/create/actors/delete/${id}`);
    }
}