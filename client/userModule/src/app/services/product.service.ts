import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Product } from '../models/Product';

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(
        private router: Router,
        private http: HttpClient
        ){}

    listProducts() {
        return this.http.get<Product[]>(`${environment.apiUrl}/list/products`);
    }

    findById(id: String){
        return this.http.get<Product>(`${environment.apiUrl}/list/products/byId/${id}`);
    }

    findByManufacturer(param: String) {
        return this.http.get<Product[]>(`${environment.apiUrl}/list/products/byManuf/${param}`);
    }

    findByName(param: String) {
        return this.http.get<Product[]>(`${environment.apiUrl}/list/products/byName/${param}`);
    }

    findByLabel(param: String) {
        return this.http.get<Product[]>(`${environment.apiUrl}/list/products/byLabel/${param}`);
    }

    findByEan(param: String) {
        return this.http.get<Product[]>(`${environment.apiUrl}/list/products/byEan/${param}`);
    }

    findByCategory(param: String) {
        return this.http.get<Product[]>(`${environment.apiUrl}/list/products/byCate/${param}`);
    }

    create(product: Product): Observable<Product>{
        return this.http.post<Product>(`${environment.apiUrl}/create/products`, product);
    }

    update(product: Product,  id: String): Observable<Product>{
        return this.http.post<Product>(`${environment.apiUrl}/create/products/update/${id}`, product);
    }

    delete(id: String): Observable<Product>{
        return this.http.delete<Product>(`${environment.apiUrl}/create/products/delete/${id}`);
    }
}