import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { ProductwithAPIService } from 'src/app/services/productwith-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private productServices: ProductwithAPIService
  ) {}
  ngOnInit(): void {
    this.productId = this._activatedRoute.snapshot.params['id'];
    this.product = this.productServices
      .getProductById(this.productId)
      .subscribe({
        next: (myProduct: Iproduct) => {
          this.product = myProduct;
        },
      });
  }
}
