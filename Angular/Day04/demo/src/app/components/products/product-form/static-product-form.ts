import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productId: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
  }
  formOperation(e: Event) {
    e.preventDefault();
    // productForm.value == {} //
    // services.addNewProduct(form.value)
    this.router.navigate(['/products']);
  }
}
