import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  msg = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  sendMessage(){
    if(this.msg.valid){
      console.log(Object.assign({}, this.msg.value))
    }
    else{
      this.openSnackBar();      
    }
  }

  openSnackBar() {
    this._snackBar.open('Lütfen gerekli alanları doldurunuz.');
  }


}
