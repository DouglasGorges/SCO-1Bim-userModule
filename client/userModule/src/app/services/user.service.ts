
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { User } from '../models/User';

@Injectable({ providedIn: 'root' })

export class UserService {

    constructor(
        private router: Router,
        private http: HttpClient
        ){}

    listUsers() {
        return this.http.get<User[]>(`${environment.apiUrl}/list/users`);
    }

    findById(id: String){
        return this.http.get<User>(`${environment.apiUrl}/list/user//${id}`);
    }

    findByDocument(document: String){
        return this.http.get<User>(`${environment.apiUrl}/lista/user//${document}`);
    }

    create(user: User): Observable<User>{
        return this.http.post<User>(`${environment.apiUrl}/create/user`, user);
    }

    update(user: User,  id: String): Observable<User>{
        return this.http.post<User>(`${environment.apiUrl}/create/user/update/${id}`, user);
    }

    delete(id: String): Observable<User>{
        return this.http.delete<User>(`${environment.apiUrl}/create/user/delete//${id}`);
    }
}