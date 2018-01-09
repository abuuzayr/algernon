import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { FilterByComponent } from './filter-by/filter-by.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    ProductComponent,
    ProductsComponent,
    HeadComponent,
    FootComponent,
    CategoriesComponent,
    CategoryComponent,
    FilterByComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
