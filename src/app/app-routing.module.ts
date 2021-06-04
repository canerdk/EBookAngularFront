import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './Components/books/books.component';
import { BooksdetailComponent } from './Components/booksdetail/booksdetail.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'books', component: BooksComponent },
  {path: 'books/:id', component: BooksComponent },
  {path: 'booksdetail/:id', component: BooksdetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
