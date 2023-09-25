import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { ProductsList } from '../models/productsList';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Iproduct[];
  constructor() {
    this.products = ProductsList;
  }

  getAllProducts(): Iproduct[] {
    return this.products;
  }

  getProductById(productId: number): Iproduct | undefined {
    return this.products.find((product: Iproduct) => product.id == productId);
  }

  addNewProduct(product: Iproduct) {
    this.products.push(product);
  }
}
