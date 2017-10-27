import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/Product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  listproducts = [];
  aModifier:Product;
  product:Product;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((product)=>this.listproducts = product)
  }

  removeProduct(id:number){
    this.productService.removeProduct(id).subscribe(() => this.productService.getAllProducts().subscribe((product)=>this.listproducts = product));
  }

  modifierProd(product:Product) {
    this.productService.updateProduct(product.id,product)
    .subscribe(() => console.log(product));
}
 

}
