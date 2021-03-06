import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from 'src/app/Services/provider.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  id: any;
  books: any;
  loading = true;

  constructor(private route: ActivatedRoute, private service: ProviderService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      this.id = data.get('id');
      this.getBooks(this.id);
    })
  }

  getBooks(id: any) {
    this.service.getBooksWithGradeId(id).then((data) => {
      this.books = data;
      this.loading = false;
    }).catch((err: HttpErrorResponse) => {
      console.log(err);
    })
  }

  getDocument(id: any) {
    this.router.navigate(['/kitapdetay', id]);
    var book = this.books.find((item: { id: any; }) => item.id === id);
    book.hitRate += 1;
    this.service.updateBook(book);
  }

}
