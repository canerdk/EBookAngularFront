import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
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
  trustedDashboardUrl!: SafeUrl;

  constructor(private route: ActivatedRoute, private service: ProviderService, private sanitizer: DomSanitizer) {    
    this.sanitizer = sanitizer;
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      this.id = data.get('id');
      this.getDocument(this.id);
    });    
  }


  getDocument(bookId: any) {
    this.service.getDocumentWithBookId(bookId).then((data) => {
      this.document = data;
      this.loading = false;
      let pdf = 'https://service.artizekaekutuphane.com/wwwroot/documents/' + this.document[0].url;
      this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(pdf);
    }).catch((err: HttpErrorResponse) => {
      console.log(err);
    });
  }


}
