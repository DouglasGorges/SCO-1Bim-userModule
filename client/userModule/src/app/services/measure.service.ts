
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Measure } from '../models/Measure';

@Injectable({ providedIn: 'root' })

export class MeasureService {

    constructor(
        private http: HttpClient
        ){}
/* TODO DGorges usar depois que conectar no back
    listMeasures() {
        return this.http.get<Measure[]>(`${environment.apiUrl}/list/measures`);
    }*/

    listMeasures() {
        let measures: Measure[] = [new Measure];
        
        let newMeasure: Measure = new Measure;
        newMeasure.entity = 'Massa';
        newMeasure.baseUnit = 'Quilograma';
        newMeasure.symbol = 'Kg';
        
        measures.push(newMeasure);
        
        let newMeasure2: Measure = new Measure;
        newMeasure2.entity = 'Unidade';
        newMeasure2.baseUnit = 'Unidade';
        newMeasure2.symbol = 'Un';
        
        measures.push(newMeasure2);
        
        let newMeasure3: Measure = new Measure;
        newMeasure3.entity = 'Comprimento';
        newMeasure3.baseUnit = 'Metros';
        newMeasure3.symbol = 'm';

        measures.push(newMeasure3);

        return measures;
    }
}