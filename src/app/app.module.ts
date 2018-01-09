// core

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// components

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { HeadComponent } from './components/head/head.component';
import { FootComponent } from './components/foot/foot.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { FilterByComponent } from './components/filter-by/filter-by.component';
import { FilterActiveComponent } from './components/filter-active/filter-active.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

// router

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

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
    FilterByComponent,
    FilterActiveComponent,
    PageNotFoundComponent,
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
