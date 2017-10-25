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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewUserComponent
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
