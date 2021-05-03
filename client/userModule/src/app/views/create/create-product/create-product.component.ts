import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertsService } from 'angular-alert-module';

import { Product } from '../../../models/Product';
import { Actor } from '../../../models/Actor';
import { Measure } from '../../../models/Measure';
import { Category } from '../../../models/Category';

import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  loading = false;
  submitted = false;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private alerts: AlertsService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      oin: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      personType: ['', Validators.required],
      employeeType: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  //measurementUnits
  //categories

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
      this.newProduct.measurementUnit = this.f.measurementUnit.value;
      this.newProduct.category = this.f.category.value;
    }
  
    async redirect(){
      await this.delay(2000)
      this.router.navigate(['/']);
    }
  
    delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
    }
}
