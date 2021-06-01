import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderService } from 'src/app/Services/provider.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  branches: any;
  panelOpenState = false;
  loading = true;
  toolbar = false;

  constructor(private service:ProviderService, private router:Router) { }

  ngOnInit(): void {
    this.getBranches();
  }

  getBranches(){
    this.service.getBranchesWithGrades().then((data) => {
      this.branches = data;
      this.loading = false;
      this.toolbar = true;
    }).catch((err: HttpErrorResponse) => {
      console.log(err);
    });    
  }

  getbooks(id:any){
    this.router.navigate(['/books', id]);
  }

}
