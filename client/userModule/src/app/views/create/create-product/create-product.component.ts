import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertsService } from 'angular-alert-module';
import { MatSelectChange } from '@angular/material/select';

import { Product } from '../../../models/Product';
import { Actor } from '../../../models/Actor';
import { Measure } from '../../../models/Measure';
import { Category } from '../../../models/Category';

import { ActorService } from '../../../services/actor.service';
import { ProductService } from '../../../services/product.service';
import { MeasureService } from '../../../services/measure.service';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  loading = false;
  submitted = false;
  form: FormGroup;
  manufacturers: Actor[];
  measurementUnits: Measure[];
  categories: Category[];

  constructor(
    private formBuilder: FormBuilder,
    private actorService: ActorService,
    private productService: ProductService,
    private measureService: MeasureService,
    private categoryService: CategoryService,
    private router: Router,
    private alerts: AlertsService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      manufacturer: ['', Validators.required],
      name: ['', Validators.required],
      label: ['', Validators.required],
      ean: ['', Validators.required],
      retailPrice: ['', Validators.required],
      measurementUnit: ['', Validators.required],
      category: ['', Validators.required]
    });

    /* TODO DGorges usar depois que conectar no back
    this.acotrService.listActorsbyType('supplier').subscribe((lista) => {
      this.suppliers = lista;
    });
    this.measureService.listMeasures().subscribe((lista) => {
      this.measurementUnits = lista;
    });
    this.categoryService.listCategories().subscribe((lista) => {
      this.categories = lista;
    });
    */
   this.manufacturers = this.actorService.listActorsbyType('supplier');
   this.measurementUnits = this.measureService.listMeasures();
   this.categories = this.categoryService.listCategories();
  }

    // getter para acesso facil aos campos do form
    get f() { return this.form.controls; }

    newProduct: Product ={
      manufacturer: new Actor,
      name: "",
      label: "",
      ean: "",
      retailPrice: 0,
      measurementUnit: new Measure,
      category: new Category
    }
  
    onSubmit() {
      this.loading = true;
  
      console.log(this.form.invalid)
      if (this.form.invalid) {
        this.loading = false;
        return;
      }
  
      this.carregarProductEntity();
  
      this.productService.create(this.newProduct).subscribe((productCreated: Product) => {
        this.alerts.setMessage('Produto cadastrado com sucesso!','success');
        this.redirect();
      });
    }
  
    carregarProductEntity(){
      this.newProduct.manufacturer = this.f.manufacturer.value;
      this.newProduct.name = this.f.name.value;
      this.newProduct.label = this.f.label.value;
      this.newProduct.ean = this.f.ean.value;
      this.newProduct.retailPrice = this.f.retailPrice.value;
    }
  
    async redirect(){
      await this.delay(2000)
      this.router.navigate(['/']);
    }
  
    delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
    }

    selectedManufacturer(event: MatSelectChange) {
      this.newProduct.manufacturer = event.value;
    }

    selectedMeasure(event: MatSelectChange) {
      this.newProduct.measurementUnit = event.value;
    }
  
    selectedCategory(event: MatSelectChange) {
      this.newProduct.category = event.value;
    }
}
