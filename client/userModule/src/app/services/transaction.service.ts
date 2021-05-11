import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Transaction } from '../models/Transaction';

@Injectable({ providedIn: 'root' })
export class TransactionService {
    constructor(
        private router: Router,
        private http: HttpClient
        ){}
/*
    listProducts() {
        return this.http.get<Product[]>(`${environment.apiUrl}/product`);
    }

    findById(id: String){
        return this.http.get<Product>(`${environment.apiUrl}/product/${id}`);
    }

    findByManufacturer(param: String) {
        return this.http.get<Product[]>(`${environment.apiUrl}/product/byManuf/${param}`);
    }

    findByName(param: String) {
        return this.http.get<Product[]>(`${environment.apiUrl}/product/byName/${param}`);
    }

    findByLabel(param: String) {
        return this.http.get<Product[]>(`${environment.apiUrl}/product/byLabel/${param}`);
    }

    findByEan(param: String) {
        return this.http.get<Product[]>(`${environment.apiUrl}/product/byEan/${param}`);
    }

    findByCategory(param: String) {
        return this.http.get<Product[]>(`${environment.apiUrl}/product/byCate/${param}`);
    }
    */

    create(transaction: Transaction): Observable<Transaction>{
        return this.http.post<Transaction>(`${environment.apiUrl}/transaction`, transaction);
    }

    /*
    update(product: Product,  id: String): Observable<Product>{
        return this.http.put<Product>(`${environment.apiUrl}/product/${id}`, product);
    }

    delete(id: String): Observable<Product>{
        return this.http.delete<Product>(`${environment.apiUrl}/product/${id}`);
    }
    */
}