import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iproduct } from '../models/iproduct';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductwithAPIService {
  baseURL: string = 'http://localhost:3005/products';
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.baseURL);
  }

  getProductById(productId: number): Observable<Iproduct> {
    return this.http.get<Iproduct>(`${this.baseURL}/${productId}`);
  }

  addNewProduct(product: any) {
    return this.http.post(this.baseURL, product);
  }

  editProduct(productId: number, product: any) {
    return this.http.put(`${this.baseURL}/${productId}`, product);
  }

  deleteProduct(productId: number) {
    return this.http.delete(`${this.baseURL}/${productId}`);
  }
}
