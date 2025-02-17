import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ProductsComponent } from './products/products.component'; 
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'products', component: ProductsComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' } 
];

@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule.forRoot(routes), FormsModule, BrowserModule, ParentComponent],
  exports: [RouterModule],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }