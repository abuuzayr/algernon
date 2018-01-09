import { ProductsService } from './../../services/products/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ ProductsService ]
})
export class ProductComponent implements OnInit {

  id: string;

  constructor(productsService: ProductsService) {
    this.id = productsService.route;
  }

  ngOnInit() {
  }

}
