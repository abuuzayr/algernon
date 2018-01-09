// core

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// components

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { HeadComponent } from './components/head/head.component';
import { FootComponent } from './components/foot/foot.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';
import { FilterByComponent } from './components/filter-by/filter-by.component';
import { FilterActiveComponent } from './components/filter-active/filter-active.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

// services

import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';

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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot',
    component: ForgotPasswordComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
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
    ForgotPasswordComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    ShoppingCartService,
    CategoriesService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
