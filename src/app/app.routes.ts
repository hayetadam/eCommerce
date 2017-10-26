import { Routes } from "@angular/router";
import { NewUserComponent } from "./new-user/new-user.component";
import { NewProductComponent } from "./new-product/new-product.component";
import { NewBrandComponent } from "./new-brand/new-brand.component";
import { NewCategoryComponent } from "./new-category/new-category.component";



export const appRoutes:Routes = [
    {path: 'newuser', component: NewUserComponent},
    {path: 'newproduct', component: NewProductComponent},
    {path: 'newbrand', component: NewBrandComponent},
    {path: 'newcategory', component: NewCategoryComponent},       
];