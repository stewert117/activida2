import { Component } from '@angular/core';
import { Product } from '../../services/products';
import { Products } from '../../services/products';



@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsPage {
  products: Product[]= [];
  constructor(private productsService: Products) {
    this.products = this.productsService.getAllProducts();
  }
}
export { Products };

