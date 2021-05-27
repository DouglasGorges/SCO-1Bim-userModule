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

    /* TODO DGorges usar depois que conectar no back
    listStates() {
        return this.http.get<State[]>(`${environment.apiUrl}/states`);
    } */

    listStates() {
        let states: State[] = [new State];

        for(var i = 0; i < 4; i++){
            let newState: State = new State;
            newState.name = 'Estado-' + i;
            newState.symbol = 'E' + i;
            states.push(newState);
        }

        return states;
    }
}