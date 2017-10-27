import { Component, OnInit } from '@angular/core';
import { Brand } from '../shared/Brand';
import { BrandService } from '../shared/brand.service';

@Component({
  selector: 'app-new-brand',
  templateUrl: './new-brand.component.html',
  styleUrls: ['./new-brand.component.css']
})
export class NewBrandComponent implements OnInit {
  name:string;
  listBrand = [];
  brand:Brand;
  
    constructor(private brandService:BrandService) {
  
     }
  
    ngOnInit() {
     
  this.brandService.getAllBrands().subscribe((brands)=>this.listBrand=brands);
    }
  
    addBrand(name){
      this.brandService.ajouterBrand(new Brand(name)).subscribe((brand)=>this.listBrand.push(brand));
    }
    removeBrand(id:number){
      this.brandService.removeBrand(id).subscribe(() => this.ngOnInit());
    }
  
  
}
