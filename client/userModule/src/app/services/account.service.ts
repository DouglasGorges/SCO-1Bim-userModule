import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import { error } from '@angular/compiler/src/util';

import { environment } from '../../environments/environment';
import { Actor } from '../models/Actor';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private actor: Actor;

    constructor(
        private router: Router,
        private http: HttpClient
        ) {
            var parsed = JSON.parse(localStorage.getItem('actor') || '{}');
            if(parsed){
                this.actor = parsed;
            }
        }

    public get actorValue(): Actor {
        return this.actor;
    }

    public get isLogged(): boolean {
        return Object.keys(this.actor).length > 0;
    }

    login(email: string, password: string): Observable<Actor> {
        return this.http.post<Actor>(`${environment.apiUrl}/actor/authenticate`, { email, password })
        .pipe(map(token => {
            if(token != null){
                localStorage.setItem('token', JSON.stringify(token));

                // Wesleyson Estou armazenando o json do ACTOR, mas não acho uma boa. Como podemos fazer para controlar as telas baseado no Actor logado?
                this.http.get<Actor>(`${environment.apiUrl}/actor/find/${email}`).subscribe((item) => {
                    this.actor = item
                    localStorage.setItem('actor', JSON.stringify(this.actor));
                });
                location.reload();
                return token;
           } else {
               return token;
           }
        }));
    }

    logout() {
        localStorage.removeItem('actor');
        this.actor = new Actor;
        if(this.router.url == '/'){
            this.refresh();
        } else {
            this.router.navigate(['/']);
        }
    }

    refresh(): void {
        window.location.reload();
    }

    register(actor: Actor) {
        return this.http.post(`${environment.apiUrl}/user/register`, actor);
    }

    getAll() {
        return this.http.get<Actor[]>(`${environment.apiUrl}/user`);
    }

    getById(id: string) {
        return this.http.get<Actor>(`${environment.apiUrl}/user/${id}`);
    }

    update(id: number, params: String) {
        return this.http.put(`${environment.apiUrl}/user/${id}`, params)
            .pipe(map(x => {
                // update do usuario no local storage
                if (id == this.actorValue.id) {
                    // update no local storage
                    const actor = { ...this.actorValue, ...params };
                    localStorage.setItem('actor', JSON.stringify(actor));

                    this.actor = actor;
                }
                return x;
            }));
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/user/${id}`)
            .pipe(map(x => {
                // auto logout se o usuario for apagado
                if (id == this.actorValue.id) {
                    this.logout();
                }
                return x;
            }));
    }
}