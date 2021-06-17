import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  product = {
    name: '',
    image: '',
    brand: '',
    price: '',
    description: '',
  };
  submitted = false;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    const data = {
      name: this.product.name,
      image: this.product.image,
      brand: this.product.brand,
      price: this.product.price,
      description: this.product.description
    };

    this.productService.create(data)
      .subscribe(
        response => {
          this.router.navigate(['/products/products-list']);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      name: '',
      image: '',
      brand: '',
      price: '',
      description: '',
    };
  }
}
