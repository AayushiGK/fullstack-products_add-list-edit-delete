import { ProductsService } from './products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products;
  public category;
  constructor(public service: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.category = param.product;
    })
    this.getProducts(this.category);
  }

  getProducts(category) {
    this.service.getProducts(category, data => {
      this.products = data.data;
      console.log('this.products',this.products)
    }, err => {
      console.log(err.stack)
    })
  }

  deleteProduct(product) {
    this.service.deleteProduct(product, data => {
      console.log('success',data)
    }, err => {
      console.log(err.stack)
    })
    this.getProducts(product.p_category);
  }

}
