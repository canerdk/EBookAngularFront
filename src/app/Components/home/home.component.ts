import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/Services/provider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  branches: any;
  panelOpenState = false;

  constructor(private service:ProviderService) { }

  ngOnInit(): void {
    this.getBranches();
  }

  getBranches(){
    this.service.getBranchesWithGrades().then(data => {
      this.branches = data;
      console.log(this.branches);
    });    
  }

}
