import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Modules/material/material.module';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './Components/home/home.component';
import { ProviderService } from './Services/provider.service';
import { BranchdetailComponent } from './Components/branchdetail/branchdetail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BooksComponent } from './Components/books/books.component';
import { BooksdetailComponent } from './Components/booksdetail/booksdetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './Components/footer/footer.component';
import { ImageViewerModule } from 'ngx-image-viewer';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ContactComponent } from './Components/contact/contact.component';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BranchdetailComponent,
    NavbarComponent,
    BooksComponent,
    BooksdetailComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ebookfront' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgxPaginationModule,
    FlexLayoutModule,
    ImageViewerModule.forRoot(),
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true
    })
  ],
  providers: [ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
