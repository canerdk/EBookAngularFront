import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, SecurityContext, ViewChild } from '@angular/core';
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
  trustedDashboardUrl: any;
  page: number = 1;
  totalPages: number = 1;
  isLoaded: boolean = false;
  url: any;
  config = {
    btnClass: 'default', // The CSS class(es) that will apply to the buttons
    zoomFactor: 0.1, // The amount that the scale will be increased by
    containerBackgroundColor: 'none', // The color to use for the background. This can provided in hex, or rgb(a).
    wheelZoom: true, // If true, the mouse wheel can be used to zoom in
    allowFullscreen: true, // If true, the fullscreen button will be shown, allowing the user to entr fullscreen mode
    allowKeyboardNavigation: true, // If true, the left / right arrow keys can be used for navigation
    btnIcons: { // The icon classes that will apply to the buttons. By default, font-awesome is used.
      zoomIn: 'fa fa-plus',
      zoomOut: 'fa fa-minus',
      rotateClockwise: 'fa fa-repeat',
      rotateCounterClockwise: 'fa fa-undo',
      next: 'fa fa-arrow-right',
      prev: 'fa fa-arrow-left',
      fullscreen: 'fa fa-arrows-alt',
    },
    btnShow: {
      zoomIn: true,
      zoomOut: true,
      rotateClockwise: true,
      rotateCounterClockwise: true,
      next: true,
      prev: true
    }
  };  
  images: any = [];
  imageIndex = 0;
  showImages = false;


  constructor(private route: ActivatedRoute, private service: ProviderService, private sanitizer: DomSanitizer) {    
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      this.id = data.get('id');
      this.getDocument(this.id);
    });    

  }

  


  getPdfImages(docName: string) {
    this.service.getPdfImagesWithDocName(docName).then((data) => {
      this.images = data;
      this.showImages = true;
    });
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.imageIndex++;
  }

  prevPage() {    
    if(this.imageIndex != 0) {
      this.imageIndex--;
    }
  }

  getPosition(event: any) {
    console.log(event);
    if(event.layerY >= 100 && event.layerY <= 600) {
      if(event.layerX > 500) {
        this.imageIndex++;
      } else {
        if(this.imageIndex != 0) {
          this.imageIndex--;
        }
      }
    }
  }


  getDocument(bookId: any) {
    this.service.getDocumentWithBookId(bookId).then((data) => {
      this.document = data;
      this.getPdfImages(this.document[0].url);
      this.loading = false;
      this.url = '/assets/documents/' + this.document[0].url;

    }).catch((err: HttpErrorResponse) => {
      console.log(err);
    });
  }



}


