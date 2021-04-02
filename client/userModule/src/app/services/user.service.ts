
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

    listStudents() {
        return this.http.get<User[]>(`${environment.apiUrl}/lista/usuario/${"Aluno"}`);
    }

    listTeachers() {
        return this.http.get<User[]>(`${environment.apiUrl}/lista/usuario/${"Professor"}`);
    }

    findById(id: String){
        return this.http.get<User>(`${environment.apiUrl}/lista/usuario//${id}`);
    }

    findByDocument(document: String){
        return this.http.get<User>(`${environment.apiUrl}/lista/usuario//${document}`);
    }

    create(user: User): Observable<User>{
        return this.http.post<User>(`${environment.apiUrl}/cadastro/usuario`, user);
    }

    update(user: User,  id: String): Observable<User>{
        return this.http.post<User>(`${environment.apiUrl}/cadastro/usuario/update/${id}`, user);
    }

    delete(id: String): Observable<User>{
        return this.http.delete<User>(`${environment.apiUrl}/cadastro/usuario/apagar//${id}`);
    }
}