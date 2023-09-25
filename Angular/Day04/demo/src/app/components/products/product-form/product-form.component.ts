import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductwithAPIService } from 'src/app/services/productwith-api.service';
import { Iproduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productId: any;
  product: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productServices: ProductwithAPIService
  ) {}

  ngOnInit(): void {
    // this.productId = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.productId = params['id'];
        this.getProductName.setValue('');
        this.getProductPrice.setValue(null);
        this.getProductQuantity.setValue(null);
      },
    });
    if (this.productId != 0) {
      this.productServices.getProductById(this.productId).subscribe({
        next: (myProduct: Iproduct) => {
          this.product = myProduct;

          this.getProductName.setValue(this.product.productName);
          this.getProductPrice.setValue(this.product.price);
          this.getProductQuantity.setValue(this.product.quantity);
        },
      });
    }
  }

  productForm = new FormGroup({
    productName: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl(),
  });

  get getProductName() {
    return this.productForm.controls['productName'];
  }
  get getProductPrice() {
    return this.productForm.controls['price'];
  }
  get getProductQuantity() {
    return this.productForm.controls['quantity'];
  }
  formOperation(e: Event) {
    e.preventDefault();

    if (this.productId == 0) {
      this.productServices.addNewProduct(this.productForm.value).subscribe();
    } else {
      // edit
      this.productServices
        .editProduct(this.productId, this.productForm.value)
        .subscribe();
    }
    this.router.navigate(['/products']);
  }
}
