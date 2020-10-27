import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './pages/admin/product/product-list/product-list.component';
import { ProductFormComponent } from './pages/admin/product/product-form/product-form.component';
import { ProductNavbarComponent } from './pages/admin/product/product-navbar/product-navbar.component';
import { RegistryComponent } from './pages/authorization/registry/registry.component';
import { LoginComponent } from './pages/authorization/login/login.component';
import { CentralViewComponent } from './pages/authorization/login/central-view/central-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductNavbarComponent,
    RegistryComponent,
    LoginComponent,
    CentralViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
