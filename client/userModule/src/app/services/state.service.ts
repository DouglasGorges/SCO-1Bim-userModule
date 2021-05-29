import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import { error } from '@angular/compiler/src/util';

import { environment } from '../../environments/environment';
import { State } from './../models/State';

@Injectable({ providedIn: 'root' })
export class StateService {
    constructor(
        private http: HttpClient
        ){}

    listStates() {
        return this.http.get<State[]>(`${environment.apiUrl}/states`);
    }
}