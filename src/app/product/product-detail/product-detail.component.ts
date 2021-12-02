import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../core/services/products/products.service';
import { Product } from '../../product.model';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.fetchProduct(id);
      //this.product = this.productService.getProduct(id);
    });
  }

  fetchProduct(id:string) {
    this.productService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'assets/images/banner-1.jpg',
      price: 30000,
      description: 'nuevo producto'
    };
    this.productService.createProduct(newProduct).subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
      const updateProduct: Partial<Product> = {
      price: 55555,
      description: 'edición título'
    };
    this.productService.updateProduct('2', updateProduct).subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productService.deleteProduct('222')
    .subscribe(rta => {
      console.log(rta);
    });
  }

}
