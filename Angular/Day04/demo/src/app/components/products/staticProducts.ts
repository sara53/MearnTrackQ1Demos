import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductsList } from 'src/app/models/productsList';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Iproduct[] = [];
  constructor(private _productServices: ProductService) {}
  ngOnInit(): void {
    this.products = this._productServices.getAllProducts();
  }
}
