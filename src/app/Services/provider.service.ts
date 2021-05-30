import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  BaseURL = 'https://localhost:44306/api/';

  constructor(private http: HttpClient) { }


  public getBranches() {
    const headers = new HttpHeaders({
      Accept: 'application/json'
    });
    return this.http.get(this.BaseURL + 'Branches', {headers}).toPromise();
  }

  public getBranchesWithGrades() {
    const headers = new HttpHeaders({
      Accept: 'application/json'
    });
    return this.http.get(this.BaseURL + 'Branches/getBranchWithGrades', {headers}).toPromise(); 
  }
}
