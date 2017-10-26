import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserService } from './shared/user.service';
import { ProductService } from './shared/product.service';
import { BrandService } from './shared/brand.service';
import { CategoryService } from './shared/category.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NewProductComponent } from './new-product/new-product.component';
import { NewBrandComponent } from './new-brand/new-brand.component';
import { NewCategoryComponent } from './new-category/new-category.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewUserComponent,
    NewProductComponent,
    NewBrandComponent,
    NewCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),


  ],
  providers: [
    UserService,
    ProductService,
    BrandService,
    CategoryService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
