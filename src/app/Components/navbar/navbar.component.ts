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

  constructor(private service:ProviderService, private router:Router) { }

  ngOnInit(): void {
    this.getBranches();
  }

  getBranches(){
    this.service.getBranchesWithGrades().then(data => {
      this.branches = data;
      console.log(this.branches);
    });    
  }

  getbooks(id:any){
    this.router.navigate(['/books', id]);
  }

}
