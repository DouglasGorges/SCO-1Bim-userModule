
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Category } from '../models/Category';

@Injectable({ providedIn: 'root' })

export class CategoryService {

    constructor(
        private http: HttpClient
        ){}
/* TODO DGorges usar depois que conectar no back
    listCategories() {
        return this.http.get<Category[]>(`${environment.apiUrl}/list/categories`);
    } */

    listCategories() {
        let categories: Category[] = [new Category];
        
        let newCategory: Category = new Category;
        newCategory.description = 'Alimentos';
        
        categories.push(newCategory);
        
        let newCategory1: Category = new Category;
        newCategory1.description = 'Bebidas';
        
        categories.push(newCategory1);
        
        let newCategory2: Category = new Category;
        newCategory2.description = 'Medicamentos';

        categories.push(newCategory2);

        return categories;
    }
}