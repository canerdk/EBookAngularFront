import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  BaseURL = 'https://service.artizekaekutuphane.com/api/';
  // BaseURL = 'https://localhost:44306/api/';

  constructor(private http: HttpClient) { }


  public getBranches() {
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    return this.http.get(this.BaseURL + 'Branches', {headers}).toPromise();
  }

  public getBranchesWithGrades() {
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    return this.http.get(this.BaseURL + 'Branches/getBranchWithGrades', {headers}).toPromise(); 
  }

  public getBooksWithGradeId(id: any) {
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    return this.http.get(this.BaseURL + 'Grades/getBooksWithGradeId?gradeId=' + id, {headers}).toPromise(); 
  }

  public getDocumentWithBookId(id: any) {
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    return this.http.get(this.BaseURL + 'Books/getDocumentWithBookId?bookId=' + id, {headers}).toPromise(); 
  }

  public getAllBooks() {
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    return this.http.get(this.BaseURL + 'Books', {headers}).toPromise(); 
  }

  public getPdfImagesWithDocName(docName: string) {
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    return this.http.get(this.BaseURL + 'Documents/getimages?docName=' + docName, {headers}).toPromise(); 
  }

  public updateBook(book: any) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.http.put(this.BaseURL + 'Books/' + book.id, book, {headers}).toPromise();
  }

  public postContact(contact:any) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.http.post(this.BaseURL + 'Contacts', contact, {headers}).toPromise();
  }
}
