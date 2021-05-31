import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from 'src/app/Services/provider.service';

@Component({
  selector: 'app-booksdetail',
  templateUrl: './booksdetail.component.html',
  styleUrls: ['./booksdetail.component.css']
})
export class BooksdetailComponent implements OnInit {
  id: any;
  document: any;

  constructor(private route: ActivatedRoute, private service: ProviderService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      this.id = data.get('id');
      this.getDocument(this.id);
    })
  }

  getDocument(bookId: any) {
    this.service.getDocumentWithBookId(bookId).then((data) => {
      this.document = data;
    })
  }

}
