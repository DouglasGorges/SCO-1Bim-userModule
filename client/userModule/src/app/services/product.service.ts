import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Product } from '../models/Product';
import { Category } from '../models/Category';
import { Actor } from '../models/Actor';
import { Measure } from '../models/Measure';

import { ActorService } from './actor.service';
import { MeasureService } from './measure.service';

@Injectable({ providedIn: 'root' })

export class ProductService {
    constructor(
        private actorService: ActorService,
        private measureService: MeasureService,
        private http: HttpClient
        ){}
/* TODO DGorges usar depois que conectar no back
    listProducts() {
        return this.http.get<Product[]>(`${environment.apiUrl}/product`);
    } */

    listProducts() {
        let products: Product[] = [new Product];
        
        let category: Category = new Category;
        category.description= 'Mercearia';
        
        let subCategory: Category = new Category;
        subCategory.description= 'Enlatados';
        subCategory.category = category;
        
        let subCategory2: Category = new Category;
        subCategory2.description= 'Ultraprocessados';
        subCategory2.category = category;

        let actors: Actor[] = this.actorService.listActorsbyType('manuf');
        let measure: Measure[] = this.measureService.listMeasures();

        let newProduct: Product = new Product;
        newProduct.category = subCategory;
        newProduct.ean = '123456';
        newProduct.label = 'Atum Ralado 127g';
        newProduct.name = 'Atum Ralado em Óleo 28%';
        newProduct.manufacturer = actors[0];
        newProduct.measurementUnit = measure[0];
        newProduct.retailPrice = 22;
        products.push(newProduct);

        
        let newProduct2: Product = new Product;
        newProduct2.category = subCategory2;
        newProduct2.ean = '098765';
        newProduct2.label = 'Ketchup Heinz';
        newProduct2.name = 'Ketchup Heinz Picante 230g';
        newProduct2.manufacturer = actors[1];
        newProduct2.measurementUnit = measure[1];
        newProduct2.retailPrice = 14;
        products.push(newProduct2);
        
        let newProduct3: Product = new Product;
        newProduct3.category = subCategory2;
        newProduct3.ean = '34235784';
        newProduct3.label = 'Maionese Franks';
        newProduct3.name = 'Maionese Franks Tradicional 500g';
        newProduct3.manufacturer = actors[2];
        newProduct3.measurementUnit = measure[2];
        newProduct3.retailPrice = 8;
        products.push(newProduct3);

        return products;
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

    create(product: Product): Observable<Product>{
        return this.http.post<Product>(`${environment.apiUrl}/product`, product);
    }

    update(product: Product,  id: String): Observable<Product>{
        return this.http.put<Product>(`${environment.apiUrl}/product/${id}`, product);
    }

    delete(id: String): Observable<Product>{
        return this.http.delete<Product>(`${environment.apiUrl}/product/${id}`);
    }
}