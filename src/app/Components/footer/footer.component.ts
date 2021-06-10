import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/Services/provider.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  showFooter = false;
  datimeTime: any;

  constructor(private service:ProviderService) {
    
   }

  ngOnInit(): void {
    this.getBranches();
    this.datimeTime = formatDate(new Date(), 'yyyy', 'en')
  }

  getBranches(){
    this.service.getBranchesWithGrades().then(() => {
      this.showFooter = true;
    });  
  }

}
