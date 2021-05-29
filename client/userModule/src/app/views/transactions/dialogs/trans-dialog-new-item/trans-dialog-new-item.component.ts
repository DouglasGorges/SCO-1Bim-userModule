import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TransactionItens } from 'src/app/models/TransactionItens';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { Product } from './../../../../models/Product';
import { ProductService } from './../../../../services/product.service'

export interface DialogData {
  product: Product;
  expiryDate: Date;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-trans-dialog-new-item',
  templateUrl: './trans-dialog-new-item.component.html',
  styleUrls: ['./trans-dialog-new-item.component.css']
})
export class TransDialogNewItemComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductService,
    public dialogRef: MatDialogRef<TransDialogNewItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.productService.listProducts().subscribe((lista) => {
      this.products = lista;
    });
  }

}
