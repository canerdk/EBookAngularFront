import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderService } from 'src/app/Services/provider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: any;
  loading = true;
  p: number = 1;

  constructor(private service: ProviderService, private router: Router) { }

  ngOnInit(): void {
   this.getAllBooks();
  }

  getAllBooks() {
    this.service.getAllBooks().then((data) => {
      this.books = data;
      this.loading = false;
    }).catch((err: HttpErrorResponse) => {
      console.log(err);
    });
  }

  getDocument(id: any) {
    this.router.navigate(['/booksdetail', id]);
  }

  

}
