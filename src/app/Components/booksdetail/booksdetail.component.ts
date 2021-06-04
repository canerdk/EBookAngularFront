import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  loading = true;
  doc = '';
  pageVariable = 1;

  constructor(private route: ActivatedRoute, private service: ProviderService) {    
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      this.id = data.get('id');
      this.getDocument(this.id);
    })
  }


  getDocument(bookId: any) {
    this.service.getDocumentWithBookId(bookId).then((data) => {
      this.document = data;
      this.loading = false;
      this.doc = this.document[0].url;
      console.log(this.document);
    }).catch((err: HttpErrorResponse) => {
      console.log(err);
    });
  }

  leftPage() {
    if(this.pageVariable != 1) {
      this.pageVariable -= 1;
    }
  }

  rightPage() {
    this.pageVariable += 1;
  }

  onChange(event: any) {

  }

}
