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

    /* TODO DGorges usar depois que conectar no back
    listCities(state: State) {
        return this.http.get<City[]>(`${environment.apiUrl}/cities/${state}`);
    } */

    listCities(state: State) {
        let cities: City[] = [new City];

        for(var i = 0; i < 4; i++){
            let newCity: City = new City;
            newCity._id = i.toString();
            newCity.name = 'Cidade-' + i;
            newCity.state = state;
            cities.push(newCity);
        }

        return cities;
    }
}