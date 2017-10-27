import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/category.service';
import { Category } from '../shared/Category';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {
  name:string;
  listCategory = [];

  constructor(private catService:CategoryService) { }

  ngOnInit() {
    this.catService.getAllCategorys().subscribe((categorys)=>this.listCategory=categorys);
  }

  ajouterCategory(name){
    this.catService.ajouterCategory(new Category(name)).subscribe((category)=>this.listCategory.push(category));
}
 

}
