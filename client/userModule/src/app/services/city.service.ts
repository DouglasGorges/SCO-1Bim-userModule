import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import { error } from '@angular/compiler/src/util';

import { environment } from '../../environments/environment';
import { State } from '../models/State';
import { City } from '../models/City';

@Injectable({ providedIn: 'root' })
export class CityService {
    constructor(
        private http: HttpClient
        ){}

    listCities(state: State) {
        return this.http.get<City[]>(`${environment.apiUrl}/states/cities/${state.id}`);
    }
}