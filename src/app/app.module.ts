import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponentComponent } from './book-component/book-component.component';
import { AddbookComponent } from './book-component/addbook/addbook.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { AddFavBookComponent } from './add-fav-book/add-fav-book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const route : Routes = [
  {path: '', component : DashboardComponent},
  {path: 'book', component : BookComponentComponent, children : [{path : ':id', component : AddbookComponent}]}, 
  {path: 'fav', component : AddFavBookComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponentComponent,
    AddbookComponent,
    AddFavBookComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
