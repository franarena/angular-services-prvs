import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { productsArray } from './products-data';
import { ProductsService } from './product.service';
import { CartService } from '@core/cart.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit{
  products: Product[] = [];
  
  constructor(private productsService: ProductsService, private cartService: CartService) { 
    //It's a best pratice in Angular to avoid using constructor as much as possible
    //One reason it's because is more difficult to test
    //we use instead OnInit
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.add(product);
  }
}
