import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './Components/books/books.component';
import { BooksdetailComponent } from './Components/booksdetail/booksdetail.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},  
  {path: 'kitaplar', component: BooksComponent },
  {path: 'kitaplar/:id', component: BooksComponent },
  {path: 'kitapdetay/:id', component: BooksdetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
